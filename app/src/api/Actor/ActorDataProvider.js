let ActorConnector = require("./ActorConnector");
let DataHandler = require("./ActorDataHandler");
module.exports = {
	
    actors: async function(fields) {
		let actors = await this.actorConnector.actors();
		return await this.dataHandler.actors(fields, actors)
    },

    /**
     * @param {String} id 
     * @param {[String]} fields 
     */
    actor: async function(id, fields) {
		let actor = await this.actorConnector.actor(id);
		return await this.dataHandler.actor(id, fields, actor);
    },

    /**
     * 
     * @param {[String]} query 
     * @param {[String]} fields 
     */
    findActors: async function(query, fields) {
		let actors = await this.actorConnector.findActors(query);
		return await this.dataHandler.findActors(query, fields, actors);
	},
	
	get dataHandler() { return DataHandler; },
    setDataHandler(newProvider) { DataHandler = newProvider; },

	get actorConnector() { return ActorConnector; },
    setActorConnector(newProvider) { ActorConnector = newProvider; },
}