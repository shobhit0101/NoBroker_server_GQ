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
    type Area{
        value:Int!
        unit:String!
    }
    type Dimensions{
        area:Area!
        bedrooms:Int
        bathrooms:Int
        balconies:Int
    }
    type Location{
        longitude:Int!
        latitude:Int!
    }
    type Price{
        value:Int!
        currency:String!
    }
    type Property{
        id:ID!
        title:String!
        owner_name:String!
        owner_email:String!
        address:Address!
        dimensions:Dimensions!
        location:Location!
        category:String!
        age:Int!
        purpose:String!
        description:String
        price:Price!
        createdAt: String! 
    }
    
    # image_file:
    # {
    #     data: Buffer,
    #     contentType: String
    # },
    # image:
    # {
    #     data: Buffer,
    #     contentType: String
    # },

    # isimg:{
    #     type:Boolean,
    #     default:false
    # },    
    
`;