const ActorConnector = require("./ActorConnector");
let dataHandler = require("./ActorDataHandler");
module.exports = {
	
	get dataHandler() { return dataHandler },

	/**
	 * 
	 * @param {ActorDataHandler} newProvider 
	 */
    setDataHandler(newProvider) {
        dataHandler = newProvider;
	},
	
    actors: async function(fields) {
		let actors = await ActorConnector.actors();
		return await this.dataHandler.actors(fields, actors)
    },

    /**
     * @param {String} id 
     * @param {[String]} fields 
     */
    actor: async function(id, fields) {
		let actor = await ActorConnector.actor(id);
		return await this.dataHandler.actor(id, fields, actor);
    },

    /**
     * 
     * @param {[String]} query 
     * @param {[String]} fields 
     */
    findActors: async function(query, fields) {
		let actors = await ActorConnector.findActors(query);
		return await this.dataHandler.findActors(query, fields, actors);
    }
}