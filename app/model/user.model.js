import Joi from "joi";
import mongoose from "mongoose";


export const userSchemaValidation=Joi.object({
    name:Joi.string().min(2).max(25).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    phone:Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).required(),
    country:Joi.string().required(),
    password:Joi.string().required()
})

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    },
    country:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{ timestamps: true });

export const User=mongoose.model("User",userSchema);
