const { gql } = require('apollo-server-express');
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
        longitude:Float!
        latitude:Float!
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
        addproperty(propInput:propInput,addressInput:addressInput,locationInput:LocationInput,dimensionsInput:DimensionsInput,areaInput:AreaInput,priceInput:PriceInput,imgname:String):Property!
        updateproperty(id:ID!,propInput:propInput,addressInput:addressInput,locationInput:LocationInput,dimensionsInput:DimensionsInput,areaInput:AreaInput,priceInput:PriceInput,imgname:String):Property!
        deleteproperty(propId:ID!):String!    
    }
`;