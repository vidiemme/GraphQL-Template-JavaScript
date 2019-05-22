let dataProvider = require('./ActorDataProvider');
dataProvider.setActorConnector(require('./MockActorConnector'));
dataProvider.setDataHandler(require('./MockActorDataHandler'));

const assert = require('assert');
let Server = require('../../server');
var ServerConstants = require("@root/ServerConstants");
const request = require('supertest');
let _app = null;

describe('#Actors', function () {
    beforeEach(function (done) {
        delete require.cache[require.resolve('../../server')];
        Server = require('../../server');
        _app = Server.app.listen(ServerConstants.port);
        done();
    });
    
    afterEach(function (done) {
        _app.close();
        _app = null;
        done();
    });
    
    describe('#actors()', function () {
        it('Responds with actors', async function () {
            const actors = await dataProvider.actors();
            assert(Array.isArray(actors), "Actors doesn't look like an array");
            assert(actors.length == 6, "There should be exactly 6 actors, found "+actors.length);
        });
    });
    
    describe('#GraphQL actors()', function () {
        it('[GraphQL] Responds with actors', (done) => {
            request(_app)
            .post('/graphql')
            .send({ query: '{ actors { id } }' })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                const actors = res.body.data.actors;
                assert(Array.isArray(actors), "Actors doesn't look like an array");
                assert(actors.length == 6, "There should be exactly 6 actors, found "+actors.length);
                done();
            })  
        })
    });
});