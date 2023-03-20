const { gql } = require('apollo-server');
module.exports=gql`
    extend type Query{
        getProperties:[Property]!
        getProperty(propId:ID!):Property     
    }
`;