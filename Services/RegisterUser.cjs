const { gql } = require('apollo-server-express');
module.exports=gql`
    input RegisterInput{
        username:String!
        password:String!
        confirmpassword:String!
        email:String!
    }
    extend type Mutation{
        register(registerInput:RegisterInput):User!
        updateuser(username:String, password:String,email:String,hello:String):User!
        deleteuser:String!
    }
`;