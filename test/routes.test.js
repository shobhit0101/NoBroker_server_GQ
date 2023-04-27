// process.env.NODE_ENV = 'test';

// // const assert = require('assert');
// // const request = require('supertest');
// // const app = require('../app');

// // // API tests
// // describe('POST /graphql', function() {
// //     it('Gets a list of users', function(done) {
// //     // Use supertest to run assertions for our API
// //     request(app)
// //     .post('/graphql')
// //     .send({ title: "API testing rocks!" })
// //     .expect(201, done);
// //     });
// //     });

// const supertest = require('supertest')
// const app = require('../app')

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

process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
// let Book = require('../app/modelas/book');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app.cjs');
let should = chai.should();


chai.use(chaiHttp);

describe('Testing.....', () => {
    // beforeEach((done) => {
    //     Book.remove({}, (err) => { 
    //        done();           
    //     });        
    });
  
  /*
  * Test the /POST route
  */
  describe('For All the queries', () => {
      it('Test1: it should return a list of all the users listed', (done) => {
        //   let book = {
        //       title: "The Lord of the Rings",
        //       author: "J.R.R. Tolkien",
        //       year: 1954
        //   }
        chai.request(server)
            .post('/graphql')
            .send({
                    query: `{ getusers{ id, email  }}`
                  })
            .end((err, res) => {
                  res.should.have.status(200);
                //   res.body.should.be.a('object');
                //   res.body.should.have.property('errors');
                //   res.body.errors.should.have.property('pages');
                //   res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });
      it('Test2: it should return a list of all the Properties listed', (done) => {
        chai.request(server)
            .post('/graphql')
            .send({
                    query: `{
                        getProperties {
                          address {
                            apartment_society
                            city
                            floorno
                            houseno
                            locality
                            sublocality
                          }
                          age
                          category
                          createdAt
                          description
                          dimensions {
                            area {
                              value
                              unit
                            }
                            bedrooms
                            bathrooms
                            balconies
                          }
                          id
                          location {
                            longitude
                            latitude
                          }
                          title
                          owner_email
                          owner_name
                        }
                      
                      }`
                  })
            .end((err, res) => {
                  res.should.have.status(200);
                //   res.body.should.be.a('object');
                //   res.body.should.have.property('errors');
                //   res.body.errors.should.have.property('pages');
                //   res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
        });
        it('Test3: it should fetch all the contactus queries',(done)=>{
            chai.request(server)
            .post('/graphql')
            .send({
                query:`{getQueries {
                    name
                    email
                    message
                    createdAt
                  }}`
            })
            .end((err,res)=>{
                res.should.have.status(200)
                done()
            })
        })
     describe('For Mutations',()=>{
        it('Test4 : Registers user if not registered',(done)=>{
            chai.request(server)
            .post('/graphql')
            .send({
                query:`
                mutation Register( 
                  $registerInput: RegisterInput
                ) {
                register(registerInput: $registerInput) {
                  id
                  email
                  username
                  token
                  createdAt
                }
              }
              `,
                variables: {
                registerInput: {
                    username: 'laksh',
                    email: 'lakshya.lo138@iiit.in',
                    password: 'lkhhgfrg',
                    confirmpassword: 'lkhhgfrg'
                }
                }
            })
            .end((err,res)=>{
                res.should.have.status(200)
                done()
            })
        })
     }) 

  });
