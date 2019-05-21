var db = [
    {
        actor_id: "nUGtvYvjOIh",
        actor_name: "Harrison",
        actor_surname: "Ford",
    },
    {
        actor_id: "bJgfStRbjQT",
        actor_name: "Will",
        actor_surname: "Smith",
    },
    {
        actor_id: "ThjHfrewDCh",
        actor_name: "Leonardo",
        actor_surname: "Di Caprio",
    },
    {
        actor_id: "SdBiuHyjgftf",
        actor_name: "Julia",
        actor_surname: "Roberts",
	},
	{
        actor_id: "ibuBuyRNkjj",
        actor_name: "Sandra",
        actor_surname: "Bullock",
	},
	{
        actor_id: "ljHvYryFryB",
        actor_name: "Nicole",
        actor_surname: "Kidman",
    }
]

module.exports = {
    actors: async function() {
        return db;
	},
	
	actor: async function(id) {
		let filtered = db.filter( item => { return item.actor_id === id });
		if (filtered.length > 0) {
			return filtered[0];
		} else {
			return null;
		}
	},
	
	findActors: async function(query) {
		const q = query.toLowerCase();
		let filtered = db.filter( item => { return (item.actor_name.toLowerCase().indexOf(q) !== -1 || item.actor_surname.toLowerCase().indexOf(q) !== -1) });
		return new Promise(async function (resolve, reject) {
            resolve(filtered);
        });
    }
}