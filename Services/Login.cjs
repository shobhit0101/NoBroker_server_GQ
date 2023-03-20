const { gql } = require('apollo-server');
module.exports=gql`
    extend type Mutation{
        login(email:String!,password:String!):User!     
    }
`;