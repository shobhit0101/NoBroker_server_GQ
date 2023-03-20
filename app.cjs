const {ApolloServer,gql}=require('apollo-server')

const {PubSub} = require("graphql-subscriptions")
const mongoose = require('mongoose');


const usertypedef=require('./User/user.cjs')
const getPropertiessquery=require('./Services/getProperty.cjs')
const getUsersquery=require('./Services/getUser.cjs')
const Propertytypedef=require('./Property/property.cjs')
const addPropertytypedef=require('./Services/createProperty.cjs')
const logintypedef=require('./Services/Login.cjs')
const registertypedef=require('./Services/RegisterUser.cjs')


// const typeDefs = require('./graphql/typedefs.cjs');
const resolvers = require('./graphql/resolver.cjs');
const connectdb=require('./db.cjs')
connectdb()
const pubsub = new PubSub();
const baseTypeDefs = gql`
  type Query
  type Mutation
`
const server = new ApolloServer({
    typeDefs:[baseTypeDefs,addPropertytypedef,usertypedef,getUsersquery,Propertytypedef,logintypedef,registertypedef,getPropertiessquery],
    resolvers,
    context: ({ req }) => ({ req, pubsub })
  });
const PORT = process.env.port || 5000;
server.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}`) 
})