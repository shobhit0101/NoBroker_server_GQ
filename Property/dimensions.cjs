const { gql } = require('apollo-server');
module.exports=gql`
    type Dimensions{
        area:Area!
        bedrooms:Int
        bathrooms:Int
        balconies:Int
    }
`