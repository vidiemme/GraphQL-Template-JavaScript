var db = [
    {
        id: "nUGtvYvjOIh",
        name: "Harrison",
        surname: "Ford",
    },
    {
        id: "bJgfStRbjQT",
        name: "Will",
        surname: "Smith",
    },
    {
        id: "ThjHfrewDCh",
        name: "Leonardo",
        surname: "Di Caprio",
    },
    {
        id: "SdBiuHyjgftf",
        name: "Julia",
        surname: "Roberts",
	},
	{
        id: "YujBYTfcFdV",
        name: "Julia",
        surname: "Roberts",
	},
	{
        id: "ibuBuyRNkjj",
        name: "Sandra",
        surname: "Bullock",
	},
	{
        id: "ljHvYryFryB",
        name: "Nicole",
        surname: "Kidman",
    }
]

module.exports = {
    actors: async function() {
        return db;
	},
	
	actor: async function(id) {
		let filtered = db.filter( item => { return item.id === id });
		return new Promise(async function (resolve, reject) {
            if (filtered.length > 0) {
				resolve(filtered[0]);
			} else {
				resolve(null);
			}
        });
	},
	
	findActors: async function(query) {
		const q = query.toLowerCase();
		let filtered = db.filter( item => { return (item.name.toLowerCase().indexOf(q) !== -1 || item.surname.toLowerCase().indexOf(q) !== -1) });
		return new Promise(async function (resolve, reject) {
            resolve(filtered);
        });
    }
}