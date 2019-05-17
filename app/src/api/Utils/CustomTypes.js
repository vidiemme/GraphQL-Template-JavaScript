"use strict";

const fs = require('fs');
const path = require('path');

const { GraphQLScalarType } = require('graphql');
const moment = require('moment');

const DateScalarType = new GraphQLScalarType({
    name: 'DateTime',
    description: 'DateTime expected format to be YYYY-MM-DDTHH:mm:sss.ZZZ',
    serialize(value) {
        //return value.toString();
        return moment.utc(value).toISOString(); 
    },
    parseValue(value) {
        // console.log(`Parsing value:${value}`);
        // return new Date(value); // value from the client
        return moment.utc(value).toISOString();
    },
    parseLiteral(ast) {
        // console.log(`AST ${JSON.stringify(ast)}`);
        if (ast.kind === 'IntValue') {
            return parseInt(ast.value, 10); // ast value is always in string format
        } else if (ast.kind === 'StringValue') {
            return moment.utc(ast.value).toISOString();
        }
        return null;
    },
});

const resolvers = { DateTime: DateScalarType }

module.exports = {
    
    get resolvers() { return resolvers },

    buildSchema: function() {
        return fs.readFileSync(path.resolve(__dirname, 'CustomTypes.graphql'), 'utf8');
    }
};