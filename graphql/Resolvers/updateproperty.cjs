const { AuthenticationError, UserInputError } = require('apollo-server-express');
const Property=require('../../models/Property.cjs')
const checkAuth=require('../../JWT/checkAuth.cjs')
module.exports={
    Mutation:{
        updateproperty:async(_,args,context)=>{
            const user=checkAuth(context)
            const{id}=args
            const propId=id
            const {propInput,addressInput,locationInput,dimensionsInput,areaInput,priceInput,imgname}=args
            
            const a={
                ...propInput,
                imgname:imgname,
                user:user.id,
                address:{...addressInput},
                location:{...locationInput},
                price:{...priceInput},
                dimensions:{
                    ...dimensionsInput,
                    area:{
                        ...areaInput
                    }
                }
            }
            
            try {
                console.log(propId)
                const property=await Property.findById(propId)
                if(!property){
                    throw new UserInputError("property with give id doesnt exists")
                }
                console.log(property)
                console.log(user.email)
                if(property.user==user.id){
                    const prop=await Property.findByIdAndUpdate(propId,a)
                    return{
                        id:prop._id,
                        ...prop._doc,
                        owner_name:user.username,
                        owner_email:user.email
                    }
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