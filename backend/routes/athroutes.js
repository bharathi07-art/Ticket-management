import express from 'express';
import generateTokens from '../utils/generateTokens.js';
import User from '../models/User.js';
import emailValidate from '../utils/emailValidate.js';

const router = express.Router();

router.post("/register", async(req,res)=>{
    const {email,password}=req.body;

    try{
        //check all the feilds are filled
        if(!email ||!password ){
            return res.status(400).json({message:"Fill all the feilds"})
        }
        // check if the email already exist or not
        const existEmail = User.findOne({email});
        if(existEmail){
            return res.send(400).json({message:"Email already exist please login"})

        }
        //check email formate
        if(!emailValidate(email)){
            return res.status(400).json({message:"Enter valid email"});
        }
        //create new user
        const newUser= new User({
            email,
            password,
        });
        //save the user... 
        if(newUser){
            await newUser.Save();

            res.status(201).json({
                _id: newUser._id,
                email: newUser.email,
                password: newUser.password,
                toekn: generateTokens(newUser._id),
                message: "successfully registered"
            })
        }


    }catch(err){

    }

})

export default router;