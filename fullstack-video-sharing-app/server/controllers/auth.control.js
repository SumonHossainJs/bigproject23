import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createError } from '../error.js';

import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) =>{
    try{

        const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

        const savedUser = await newUser.save();

        res.status(200).json(savedUser);
        
    }catch(err){
        next(err);
    }
}
export const signin = async (req, res, next) =>{
    try{

        const user = await User.findOne({name: req.body.name});
        if(!user) return next(createError(404,"Requested user not found"));

        const isCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isCorrect) return next(createError(400, "Wrong creadentials"));


        const token = jwt.sign({id:user._id}, process.env.JWT);

       

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json(user._doc);
        
    }catch(err){
        next(err);
    }
}
export const fromGoogle = async (req, res, next) =>{
    try{
        const user = await User.findOne({email:req.body.email});

        if(user){
            const token = jwt.sign({id:user._id}, process.env.JWT);

            res.cookie("access_token", token, {
                httpOnly: true,
            }).status(200).json(user.doc);
        } else{
            const newUser = new User({
                ...req.body, fromGoogle:true,
            });

            const savedUser = await newUser.save();
            const token = jwt.sign({id:user._id}, process.env.JWT);

            res.cookie("access_token", token, {
                httpOnly: true,
            }).status(200).json(savedUser.doc);
        
        }
        
    }catch(err){
        next(err);
    }
}