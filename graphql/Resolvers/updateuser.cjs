const { AuthenticationError, UserInputError } = require('apollo-server-express');


const User=require('../../models/User.cjs')
const bcrypt = require('bcryptjs');
const checkAuth=require('../../JWT/checkAuth.cjs')
const generateToken=require('../../JWT/generateToken.cjs')
module.exports={
    Mutation:{
        updateuser:async(_,args,context)=>{
            const user=checkAuth(context)
            try{
                console.log("fi")
                console.log(args)
                const salt=await bcrypt.genSalt(10)
                args.password=await bcrypt.hash(args.password,salt)
                const res=await User.findByIdAndUpdate(user.id,args,{new: true})
                const token=generateToken(res)
                console.log(res)
                return{
                    ...res._doc,
                    id:res._id,
                    token:token,
                    postings:[]
                }
            }
            catch(err){
                throw new Error(err)
            }
            
        }
    }
}