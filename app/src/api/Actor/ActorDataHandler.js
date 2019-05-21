const ActorConnector = require("./ActorConnector");

function mapActor(actor) {
	return { id: actor.actor_id, name: actor.actor_name, surname: actor.actor_surname };
}

module.exports = {
	
	/**
	 * 
	 * @param {Array<Actor>} actors 
	 */
    actors: async function(fields, actors) {
        return actors.map(item => { return mapActor(item) });
    },

    /**
	 * 
	 * @param {String} id User id
	 * @param {[String]} fields 
	 * @param {Actor} actor Can be null.
	 */
    actor: async function(id, fields, actor) {
		if (actor === null) { return null; }
        return mapActor(actor);
    },

    /**
	 * 
	 * @param {String} query Search query
	 * @param {[String]} fields 
	 * @param {[Actor]} actors 
	 */
    findActors: async function(query, fields, actors) {
        return actors.map(item => { return mapActor(item) });
    }
}