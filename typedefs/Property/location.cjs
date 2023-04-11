const { gql } = require('apollo-server');
module.exports=gql`
    type Location{
        longitude:Int!
        latitude:Int!
    }
`