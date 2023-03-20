const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const User=require('../../models/User.cjs')
const generateToken=require('../../JWT/generateToken.cjs')
module.exports={
    Mutation:{
        login:async(_,{email,password})=>{
            const user=await User.findOne({email})
            if(!user){
                errors.general='User not found'
                throw new UserInputError('User not found',{errors})
            }
            const match=await bcrypt.compare(password,user.password)
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