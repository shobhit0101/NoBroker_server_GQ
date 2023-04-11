const mongoose = require("mongoose")
const {Schema}=mongoose
const conversationSchema=new Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    createdAt:{
        type:String
    }
    
})
const Conversation=mongoose.model('conversation',conversationSchema)
module.exports=Conversation