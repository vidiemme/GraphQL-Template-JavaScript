var db = [
    {
        id: "nUGtvYvjOIh",
        name: "Harrison Mock",
        surname: "Ford",
    },
    {
        id: "bJgfStRbjQT",
        name: "Will Mock",
        surname: "Smith",
    },
    {
        id: "ThjHfrewDCh",
        name: "Leonardo Mock",
        surname: "Di Caprio",
    },
    {
        id: "SdBiuHyjgftf",
        name: "Julia Mock",
        surname: "Roberts",
	},
	{
        id: "YujBYTfcFdV",
        name: "Julia Mock",
        surname: "Roberts",
	},
	{
        id: "ibuBuyRNkjj",
        name: "Sandra Mock",
        surname: "Bullock",
	},
	{
        id: "ljHvYryFryB",
        name: "Nicole Mock",
        surname: "Kidman",
    }
]

module.exports = {
	
    actors: async function(fields) {
        return db;
    },

    /**
     * @param {String} id 
     * @param {[String]} fields 
     */
    actor: async function(id, fields) {
		let result = db.filter( item => { return (item.name.toLowerCase().indexOf(query) !== -1 || item.surname.toLowerCase().indexOf(query) !== -1) });
		return result.length > 0 ? result[0] : null;
    },

    /**
     * 
     * @param {[String]} query 
     * @param {[String]} fields 
     */
    findActors: async function(query, fields) {
		return db.filter( item => { return (item.name.toLowerCase().indexOf(q) !== -1 || item.surname.toLowerCase().indexOf(q) !== -1) });
    }
}

console.log("Using mocked ActorsAPI Data Provider");