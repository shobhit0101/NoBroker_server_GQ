const { gql } = require('apollo-server');
module.exports=gql`
    type Area{
        value:Int!
        unit:String!
    }
`