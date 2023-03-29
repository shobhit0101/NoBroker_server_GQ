const { gql } = require('apollo-server-express');
module.exports=gql`
    type User{
        id:ID!
        email:String!
        username:String!
        token: String!
        createdAt: String! 
        postings:[Property]!      
    }
`;