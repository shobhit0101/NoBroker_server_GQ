const Conversation=require('../../models/Conversation.cjs')
const User=require('../../models/User.cjs')
const checkAuth=require('../../JWT/checkAuth.cjs')
const { UserInputError } = require('apollo-server-express');
module.exports={
    Query:{
        getConversation:async(_,args,context)=>{
            const {receiverId}=args
            const sender=checkAuth(context)
            try{
                const receiver=await User.findById(receiverId)
                if( !receiver){
                    errors.general='User does not exist'
                    throw new UserInputError('User does not exist',{errors})
                }
                const conversation=await Conversation.findOne({$or:[{sender:sender.id,receiver:receiverId},{sender:receiverId,receiver:sender.id}]})
                if(!conversation){
                    errors.general='Conversation not found'
                    throw new UserInputError('Conversation not found',{errors})
                }
                return{
                    ...conversation._doc,
                    id:conversation._id,
                    receiver:{
                        ...receiver._doc,
                        id:receiverId
                    }
                }
            }
            catch(err){
                throw new Error(err)
            }
        },
        getConversations: async(_,args,context)=>{
            const user=checkAuth(context)
            try{
                const conversations=await Conversation.find({$or:[{sender:user.id},{receiver:user.id}]})
                let res=[]
                for(let c of conversations){
                    console.log(c.sender)
                    console.log(user.id)
                    if(c.sender==user.id){
                        try{
                            const receiver=await User.findById(c.receiver)
                            if(receiver){
                            res.push({
                                ...c._doc,
                                id:c._id,
                                receiver:{
                                    ...receiver._doc,
                                    id:receiver._id
                                }
                            })}
                        }
                        catch(err){
                            throw new Error(err)
                        }
                    }
                    else{
                        try{
                            const receiver=await User.findById(c.sender)
                            if(receiver){
                            res.push({
                                ...c._doc,
                                id:c._id,
                                receiver:{
                                    ...receiver._doc,
                                    id:receiver._id
                                }
                            })}
                        }
                        catch(err){
                            throw new Error(err)
                        }
                    }
                }
                return res
            }
            catch(err){
                throw new Error(err)
            }
        }
    },
    Mutation:{
        startConversation:async(_,args,context)=>{
            const sender=checkAuth(context)
            const {receiverUsername}=args
            const receiver=await User.findOne({username:receiverUsername}) 
            if(!receiver){
                let errors='User not found'
                throw new UserInputError('User not found',{errors})
            }
            if(await Conversation.findOne({$or:[{sender:sender.id,receiver:receiver._id},{sender:receiver._id,receiver:sender.id}]})){
                let errors='Conversation Already Exists'
                throw new UserInputError('Conversation Already Exists',{errors})
            }
            const newConversation=new Conversation({
                sender:sender.id,
                receiver:receiver._id,
                createdAt:new Date().toISOString()
            })
            const convo=await newConversation.save()
            return{
                ...convo._doc,
                id:convo._id,
                receiver:{
                        ...receiver._doc,
                        email:receiver.email,
                        id:receiver._id
                    }
            }
        }   
    }
}