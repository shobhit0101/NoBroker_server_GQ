const { gql } = require('apollo-server-express');
module.exports=gql`
    extend type Query{
        getQueries:[Queries]!
    }
    extend type Mutation{
        login(email:String!,password:String!):User!
        postQuery(email:String!,name:String!,message:String!):String!     
    }
`;