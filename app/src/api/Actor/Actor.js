"use strict";

const fs = require('fs');
const path = require('path');

let dataSource = require('./ActorDataProvider');
const Fields = require('graphql-fields');

async function actors(root, params, ctx, info) {
    const fields = Object.keys(Fields(info));
    return await dataSource.actors(fields);
}

async function actor(root, { id }, ctx, info) {
    const fields = Object.keys(Fields(info));
    return await dataSource.actor(id, fields);
}

async function findActors(root, { query }, ctx, info) {
    const fields = Object.keys(Fields(info));
    return await dataSource.findActors(query, fields);
}

const resolvers = {
    Query: {
        actors,
        actor,
        findActors,
    },
    Mutation: {
    },
    Actor: {
    }
}

module.exports = {
    
    get resolvers() { return resolvers },

    buildSchema: function() {
        return fs.readFileSync(path.resolve(__dirname, 'Actor.graphql'), 'utf8');
    },

    get dataProvider() { return dataSource },

    setDataProvider(newProvider) {
        dataSource = newProvider;
    }
};