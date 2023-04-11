const mongoose = require("mongoose")
const {Schema}=mongoose
const messageSchema=new Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    conversation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'conversation'
    },
    text:{
        type:String
    },
    createdAt:{
        type:String
    }
    
})
const Message=mongoose.model('message',messageSchema)
module.exports=Message