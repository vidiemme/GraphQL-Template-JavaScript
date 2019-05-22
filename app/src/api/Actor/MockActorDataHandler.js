
function mapActor(actor) {
	return { id: actor.actor_id, name: actor.actor_name + " Mock", surname: actor.actor_surname + " Mock" };
}

module.exports = {
	
    actors: async function(fields, actors) {
        return actors.map(item => { return mapActor(item) });
    },

    actor: async function(id, fields, actor) {
		if (actor === null) { return null; }
        return mapActor(actor);
    },

    findActors: async function(query, fields, actors) {
        return actors.map(item => { return mapActor(item) });
    }
}

console.log("[ActorAPI] Using mocked ActorsAPI Actor Data Handler");