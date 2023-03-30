const { AuthenticationError, UserInputError } = require('apollo-server-express');


const User=require('../../models/User.cjs')

const checkAuth=require('../../JWT/checkAuth.cjs')

module.exports={
    Mutation:{
        updateuser:async(_,args,context)=>{
            const user=checkAuth(context)
            try{
                
                const res=await User.findByIdAndUpdate(user.id,args)
                return{
                    ...res._doc,
                    id:res._id,
                    token:context.req.headers.authorization,
                    postings:[]
                }
            }
            catch(err){
                throw new Error(err)
            }
            
        }
    }
}