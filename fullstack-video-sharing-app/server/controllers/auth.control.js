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
        
    }catch(err){
        next(err);
    }
}
export const fromGoogle = async (req, res, next) =>{
    try{
        
    }catch(err){
        next(err);
    }
}