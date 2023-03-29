const { gql } = require('apollo-server-express');
module.exports=gql`
    extend type Mutation{
        login(email:String!,password:String!):User!     
    }
`;