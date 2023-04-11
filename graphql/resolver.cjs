const loginResolver=require('./Resolvers/login.cjs')
const registerResolver=require('./Resolvers/register.cjs')
const addPropertyResolver=require('./Resolvers/addproperty.cjs')
const deletePropertyResolver=require('./Resolvers/deleteproperty.cjs')
const getPropertiesResolver=require('./Resolvers/getproperties.cjs')
const getUsersResolver=require('./Resolvers/getusers.cjs')
const deleteuserResolver=require('./Resolvers/deleteuser.cjs')
const updateuserResolver=require('./Resolvers/updateuser.cjs')
const updatepropertyResolver=require('./Resolvers/updateproperty.cjs')
const contactusResolver=require('./Resolvers/contactus.cjs')
const conversationResolver=require('./Resolvers/conversation.cjs')
const messageResolver=require('./Resolvers/message.cjs')
module.exports={
    Query:{
        ...getPropertiesResolver.Query,
        ...getUsersResolver.Query,
        ...contactusResolver.Query,
        ...conversationResolver.Query,
        ...messageResolver.Query
    },
    Mutation:{
        ...loginResolver.Mutation,
        ...registerResolver.Mutation,
        ...addPropertyResolver.Mutation,
        ...deletePropertyResolver.Mutation,
        ...deleteuserResolver.Mutation,
        ...updateuserResolver.Mutation,
        ...updatepropertyResolver.Mutation,
        ...contactusResolver.Mutation,
        ...conversationResolver.Mutation,
        ...messageResolver.Mutation
    }
}