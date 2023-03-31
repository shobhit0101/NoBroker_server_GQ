const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server-express');

const User=require('../../models/User.cjs')
const generateToken=require('../../JWT/generateToken.cjs')
module.exports={
    Mutation:{
        login:async(_,{email,password})=>{
            console.log("first")
            const user=await User.findOne({email})
            console.log(password)
            console.log(user)
            if(!user){
                errors.general='User not found'
                throw new UserInputError('User not found',{errors})
            }
            const match=await bcrypt.compare(password,user.password)
            console.log(match)
            if(!match){
                errors.general = 'Wrong crendetials';
                throw new UserInputError('Wrong crendetials', { errors });
            }
            const token=generateToken(user)
            return{
                ...user._doc,
                id:user._id,
                token
            }
        }
    }
}