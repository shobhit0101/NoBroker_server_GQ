const { gql } = require('apollo-server');
module.exports=gql`
    input addressInput{
        apartment_society:String
        locality:String!
        city:String!
        houseno:String!
        floorno:String
        sublocality:String
    }
    input AreaInput{
        value:Int!
        unit:String!
    }
    input DimensionsInput{
        bedrooms:Int
        bathrooms:Int
        balconies:Int
    }
    input LocationInput{
        longitude:Int!
        latitude:Int!
    }
    input PriceInput{
        value:Int!
        currency:String!
    }
    input propInput {
        title:String!
        
        # dimensions:Dimensions!
        # location:Location!
        category:String!
        age:Int!
        purpose:String!
        description:String
    }

    extend type Mutation{
        addproperty(propInput:propInput,addressInput:addressInput,locationInput:LocationInput,dimensionsInput:DimensionsInput,areaInput:AreaInput,priceInput:PriceInput):Property!
        deleteproperty(propId:ID!):String!    
    }
`;