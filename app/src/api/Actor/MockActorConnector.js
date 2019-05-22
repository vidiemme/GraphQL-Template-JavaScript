var db = [
    {
        actor_id: "aaaaaaaaaaa",
        actor_name: "Harrison",
        actor_surname: "Ford",
    },
    {
        actor_id: "bbbbbbbbbbb",
        actor_name: "Will",
        actor_surname: "Smith",
    },
    {
        actor_id: "ccccccccccc",
        actor_name: "Leonardo",
        actor_surname: "Di Caprio",
    },
    {
        actor_id: "ddddddddddd",
        actor_name: "Julia",
        actor_surname: "Roberts",
	},
	{
        actor_id: "eeeeeeeeeee",
        actor_name: "Sandra",
        actor_surname: "Bullock",
	},
	{
        actor_id: "fffffffffff",
        actor_name: "Nicole",
        actor_surname: "Kidman",
    }
]

module.exports = {
    actors: async function() {
        return db;
	},
	
	actor: async function(id) {
		return db[1];
	},
	
	findActors: async function(query) {
		return db.slice(2, 5);
    }
}

console.log("[ActorAPI] Using mocked ActorsAPI Actor Connector");