const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server-express');

const User=require('../../models/User.cjs')
const generateToken=require('../../JWT/generateToken.cjs')
module.exports={
    Mutation:{
        async register(_,registerInput){
            console.log("first")
            let{username,password,confirmpassword,email}=registerInput.registerInput
            console.log(email)
            const user=await User.findOne({email})
            if(user){
                throw new UserInputError('An account with this email exists', {
                    errors: {
                      email: 'An account with this email already exists'
                    }
                });
            }
            const salt=await bcrypt.genSalt(10)
            password=await bcrypt.hash(password,salt)
            const newUser=new User({
                username,
                email,
                password,
                createdAt: new Date().toISOString()
            })
            console.log(newUser)
            const res=await newUser.save()
            console.log(res._doc)
            const token=generateToken(res)
            console.log(token)
            return{
                ...res._doc,
                id:res._id,
                token,
                postings:[]
            }
        }
    }
}