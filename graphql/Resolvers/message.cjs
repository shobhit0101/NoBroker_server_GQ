const Conversation=require('../../models/Conversation.cjs')
const Message=require('../../models/Message.cjs')
const User=require('../../models/User.cjs')
const checkAuth=require('../../JWT/checkAuth.cjs')
const { UserInputError } = require('apollo-server-express');
module.exports={
    Query:{
        getMessages:async(_,args,context)=>{
            checkAuth(context)
            const{conversationId}=args
            try{const messages=await Message.find({conversation:conversationId}).sort({createdAt:1})
            return messages}
            catch(err){
                throw new Error(err)
            }
        }
    },
    Mutation:{
        sendMessage:async(_,args,context)=>{
            try{const sender=checkAuth(context)
            const{conversationId,text}=args
            const newMessage= new Message({
                sender:sender.id,
                text,
                conversation:conversationId,
                createdAt:new Date().toISOString()
            })
            const message= await newMessage.save()
            console.log(message)
            return `Message Sent`}
            catch(err){
                throw new Error(err)
            }
        }       
    }
}