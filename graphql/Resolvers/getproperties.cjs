const Property=require('../../models/Property.cjs');
const User=require('../../models/User.cjs')
module.exports={
    Query:{
        getProperties:async()=>{
            try {
                const prop = await Property.find().sort({ createdAt: -1 });
                const properties=[]
                for(const p of prop){
                    console.log(p.user)
                    const user=await User.findById(p.user)
                    console.log(user)
                    properties.push({
                        id:p._id,
                        ...p._doc,
                        owner_name:user.username,
                        owner_email:user.email
                    })
                }
                console.log(properties)
                return properties
            } catch (err) {
                throw new Error(err);
            }
        }
    }
}