"use strict";

const fs = require('fs');
const path = require('path');
const Fields = require('graphql-fields');

let dataSource = require('./LandingDataProvider');

async function landingBackgroundResources(root, params, ctx, info) {
    const fields = Object.keys(Fields(info));
    return await dataSource.backgroundResources(params.filter, fields);
}

async function randomBackgroundResource(root, params, ctx, info) {
    const fields = Object.keys(Fields(info));
    return await dataSource.randomBackgroundResource(params.filter, fields);
}

const resolvers = {
    Query: {
        landingBackgroundResources,
        randomBackgroundResource
    },
    Mutation: {
    },
    LandingResource: {

    }
}

module.exports = {

    get resolvers() { return resolvers },

    buildSchema: function() {
        return fs.readFileSync(path.resolve(__dirname, 'Landing.graphql'), 'utf8');
    },

    get dataProvider() { return dataSource },

    setDataProvider(newProvider) {
        dataSource = newProvider;
    }
};