const loginResolver=require('./Resolvers/login.cjs')
const registerResolver=require('./Resolvers/register.cjs')
const addPropertyResolver=require('./Resolvers/addproperty.cjs')
const deletePropertyResolver=require('./Resolvers/deleteproperty.cjs')
const getPropertiesResolver=require('./Resolvers/getproperties.cjs')
const getUsersResolver=require('./Resolvers/getusers.cjs')
const deleteuserResolver=require('./Resolvers/deleteuser.cjs')
module.exports={
    Query:{
        ...getPropertiesResolver.Query,
        ...getUsersResolver.Query
    },
    Mutation:{
        ...loginResolver.Mutation,
        ...registerResolver.Mutation,
        ...addPropertyResolver.Mutation,
        ...deletePropertyResolver.Mutation,
        ...deleteuserResolver.Mutation
    }
}