const { gql } = require('apollo-server');
module.exports=gql`
    input RegisterInput{
        username:String!
        password:String!
        confirmpassword:String!
        email:String!
    }
    extend type Mutation{
        register(registerInput:RegisterInput):User!
        deleteuser:String!
    }
`;