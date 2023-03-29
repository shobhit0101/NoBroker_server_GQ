const { gql } = require('apollo-server-express');
module.exports=gql`
    extend type Query{
        getProperties:[Property]!
        getProperty(propId:ID!):Property     
    }
`;