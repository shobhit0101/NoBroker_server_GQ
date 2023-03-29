const { AuthenticationError, UserInputError } = require('apollo-server-express');
const Property=require('../../models/Property.cjs')
const checkAuth=require('../../JWT/checkAuth.cjs')
module.exports={
    Mutation:{
        deleteproperty:async(_,{propId},context)=>{
            const user=checkAuth(context)

            try {
                const property=await Property.findById(propId)
                if(!property){
                    throw new UserInputError("property with give id doesnt exists")
                }
                console.log(property)
                console.log(user.email)
                if(property.user==user.id){
                    await Property.findByIdAndDelete(propId)
                    return `Property deleted successfuly`
                }
                else{
                    throw new AuthenticationError("Not Allowed")
                }
                
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}