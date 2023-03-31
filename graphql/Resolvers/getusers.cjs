const User=require('../../models/User.cjs')
module.exports={
    Query:{
        getusers:async()=>{
            
            const users=await User.find().sort({createdAt:-1})
            console.log(users)
            return users
        }
    }
}