'use strict'

const backgroundResources = [
    {
        url: 'https://www.mediafire.com/file/t99j26qk9kdsrtq/LiveiPhoneFishBlueRed.m4v',
        title: 'Blue/Red Fish on Black Background',
        theme: 'DARK',
        type: 'VIDEO',
        resolution: 'HIGH'
    },
    {
        url: 'https://www.mediafire.com/file/jkxkl77liduv5cw/LiveiPhoneFishBlueWhite.m4v',
        title: 'Blue/White Fish on Black Background',
        theme: 'DARK',
        type: 'VIDEO',
        resolution: 'HIGH'
    },
    {
        url: 'https://www.mediafire.com/file/ryw1c9dgsex7p7r/LiveiPhoneFishBlueYellow.m4v',
        title: 'Blue/Yellow Fish on Black Background',
        theme: 'DARK',
        type: 'VIDEO',
        resolution: 'HIGH'
    },
    {
        url: 'https://www.mediafire.com/file/r7xeaiakqi13hka/LiveiPhoneFishOrange.m4v',
        title: 'Orange Fish on White Background',
        theme: 'LIGHT',
        type: 'VIDEO',
        resolution: 'HIGH'
    },
    {
        url: 'https://www.mediafire.com/file/64fv909dcnx2jd0/LiveiPhoneFishLightBlue.m4v',
        title: 'Light Blue Fish on White Background',
        theme: 'LIGHT',
        type: 'VIDEO',
        resolution: 'HIGH'
    },
    {
        url: 'https://www.mediafire.com/file/bq5d40coh48ic1z/LiveiPhoneFishBlueOrange.m4v',
        title: 'Blue/Orange Fish on White Background',
        theme: 'LIGHT',
        type: 'VIDEO',
        resolution: 'HIGH'
    }
]

module.exports = {

    /**
     * 
     * @param {{ type, resolution, theme }} filters 
     * @param {[String]} fields 
     */
    backgroundResources: async function(filters, fields) {
        let resources = backgroundResources.map( item => { return item; });
        let keys = Object.keys(filters).filter( item => { return filters[item] });

        return resources.filter(item =>
            keys.map(key => item[key] === (filters[key]))
            .reduce((x, y) => x && y, true)
        );
    },

    /**
    *
    * @param {{ type, resolution, theme }} filters
    * @param {[String]} fields
    */
    randomBackgroundResource: async function(filters, fields) {
        const resources = await this.backgroundResources(filters, fields);
        const length = resources.length;
        if (length == 0) { return null; }
        return resources[Math.floor(Math.random()*length)];
    }
}