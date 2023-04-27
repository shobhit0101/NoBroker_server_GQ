process.env.NODE_ENV = 'test';

const assert = require('assert');
const request = require('supertest');
const app = require('./app.cjs');

// API tests
describe('POST /graphql', function() {
    it('Gets a list of users', function(done) {
    // Use supertest to run assertions for our API
    request(app)
    .post('/graphql')
    .send({
            query: `{ getusers{ id, email  }}`
        })
    .expect(201, done);
    });
    });

// const supertest = require('supertest')
// const app = require('./app.cjs')

// app.server = app.listen(5000)

// describe('Server', () => {
//     afterEach(() => app.server.close())

//     it('Should listen to HTTP requests', (done) => {
//         const userId = '0'
//         request(app)
//             .post('/graphql')
//             .send({
//                 query: `{ getusers{ id, email  }}`
//             })
//             .set('Accept', 'application/json')
//             .expect(200)
//             .end((err, res) => {
//                 if (err) return done(err)
//                 expect(res.body && typeof res.body === 'object').toBe(true)
//                 expect(res.body).toHaveProperty('data')
//                 expect(res.body.data).toHaveProperty('getusers')
//                 // expect(res.body.data.getusers).toHaveProperty('id')
//                 // expect(res.body.data.user.id).toBe(userId)

//                 // expect(res.body.data.user).toHaveProperty('friends')
//                 // expect(res.body.data.user.friends).toContainEqual({ id: '1' })
//                 return done()
//             })
//     })
// })