"use strict";

const { merge } = require('lodash');
const { mergeTypes } = require('merge-graphql-schemas');

const CustomTypes = require('./Utils/CustomTypes');
const ActorsAPI = require('./Actor/Actor');

module.exports = {
    
    prepareForTest: function() {
		let dataProvider = ActorsAPI.dataProvider;
		dataProvider.setActorConnector(require('./Actor/MockActorConnector'));
		dataProvider.setDataHandler(require('./Actor/MockActorDataHandler'));
    },

    buildResolvers: function(args) {
        //Entry point for adding APIs
        let result = merge(
            CustomTypes.resolvers,
			ActorsAPI.resolvers
		);
        return result;
    },

    buildSchema: function() {
        let schema = mergeTypes([
            CustomTypes.buildSchema(),
            ActorsAPI.buildSchema()
        ]);
        return schema;
    }
};