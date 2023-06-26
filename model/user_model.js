const mongoose=require('mongoose');
const db=require('../config/db');
const { Schema }= mongoose;

const userSchema=new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const userModel=db.model('users',userSchema);

module.exports=userModel;