const ActorConnector = require("./ActorConnector");

module.exports = {
	
    actors: async function(fields) {
        return ActorConnector.actors();
    },

    /**
     * @param {String} id 
     * @param {[String]} fields 
     */
    actor: async function(id, fields) {
        return await ActorConnector.actor(id);
    },

    /**
     * 
     * @param {[String]} query 
     * @param {[String]} fields 
     */
    findActors: async function(query, fields) {
        return await ActorConnector.findActors(query);
    }
}