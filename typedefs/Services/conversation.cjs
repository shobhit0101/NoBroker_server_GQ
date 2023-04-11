const { gql } = require('apollo-server-express');
module.exports=gql`

    extend type Mutation{
        startConversation(receiverUsername:String!):Conversation!  
    }

    extend type Query{
        getConversation(receiverId:ID!):Conversation
        getConversations:[Conversation]!  
    }
`;