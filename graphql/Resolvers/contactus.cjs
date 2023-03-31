const User=require('../../models/User.cjs')
const Queries=require('../../models/Contactus.cjs')
const checkAuth=require('../../JWT/checkAuth.cjs')
module.exports={
    Query:{
        getQueries:async()=>{
            try {
                const queries = await Queries.find().sort({ createdAt: -1 });
                console.log(queries[0])
                // let res=[]
                // for(let q in queries){
                //     const a={
                //         ...queries[q],
                //         createdAt:new Date().toISOString()
                //     }
                //     res.push(a)
                // }
                return queries
                
            } catch (error) {
                throw new Error(error)
            }
        }
    },
    Mutation:{
        postQuery:async(_,args,context)=>{
            const newQuery=new Queries({
                ...args,
                createdAt:new Date().toISOString()
            })
            const query=await newQuery.save()
            console.log(query)
            return `Done`
        }   
    }
}