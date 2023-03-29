const { AuthenticationError, UserInputError } = require('apollo-server-express');


const User=require('../../models/User.cjs')
const Property=require('../../models/Property.cjs')

const checkAuth=require('../../JWT/checkAuth.cjs')

module.exports={
    Mutation:{
        deleteuser:async(_,args,context)=>{
            const user=checkAuth(context)
            try{
                await Property.deleteMany({user:user.id})
                await User.findByIdAndDelete(user.id)
                return `User Deleted`
            }
            catch(err){
                throw new Error(err)
            }
            
        }
    }
}