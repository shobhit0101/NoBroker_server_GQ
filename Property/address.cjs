const { gql } = require('apollo-server');
module.exports=gql`
    type Address{
        apartment_society:String
        locality:String!
        city:String!
        houseno:String!
        floorno:String
        sublocality:String
    }
`