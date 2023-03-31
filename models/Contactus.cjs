const mongoose = require("mongoose")
const {Schema}=mongoose
const ContactSchema=new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    message:{
        type:String
    },
    createdAt:{
        type:String,
    }
})
const Queries=mongoose.model('contact',ContactSchema)
module.exports=Queries