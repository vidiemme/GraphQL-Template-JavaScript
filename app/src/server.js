"use strict";
var ServerConstants = require("./ServerConstants");

var express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const cors = require('cors');
const compression = require('compression');

var APIConstants = require("./api/APIConstants");

const environment = process.env.NODE_ENV || 'production';
if (environment === 'test' || environment === 'mock') {
    APIConstants.prepareForTest();
}

var resolvers = APIConstants.buildResolvers();
// Create an express server and a GraphQL endpoint
const app = express();
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

const prepareGraphqlEndpoint = (req) => {
    return { test: "ok!" }
}

const APOLLO = new ApolloServer({
    typeDefs: gql`${APIConstants.buildSchema()}`,
    resolvers,
    context: prepareGraphqlEndpoint,
    playground: {
        endpoint: `http://localhost:${ServerConstants.port}/graphql`,
        settings: {
            'editor.theme': 'dark'
        }
    }
});

APOLLO.applyMiddleware({
    app, path: '/graphql'
});

app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof SyntaxError) {
            return res.status(400).send({error: 'SyntaxError: malformed JSON payload.'});
        }
        return res.status(500).end();
    }
    return next();
});
  
app.use('*', (req, res) => {
    res.status('404').end();
});

if (environment != 'test') {
    app.listen(ServerConstants.port, () => console.log(`Express GraphQL Server Now Running On localhost:${ServerConstants.port}/graphql`));
}

module.exports = {
    app
}