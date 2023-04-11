const { gql } = require('apollo-server-express');
module.exports=gql`

    extend type Mutation{
        sendMessage(conversationId:ID!,text:String!):String!  
    }

    extend type Query{
        getMessages(conversationId:ID!):[Message]!  
    }
`;