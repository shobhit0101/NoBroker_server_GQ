const { gql } = require('apollo-server-express');
module.exports=gql`
    type Conversation{
        id:ID!
        receiver:User!
        createdAt: String!    
    }
    type Message{
        id:ID!
        sender:ID!
        conversation:Conversation
        text:String!
        createdAt: String! 
    }
`;