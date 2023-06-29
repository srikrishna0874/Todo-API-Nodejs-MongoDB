const mongoose = require('mongoose');
const db = require('../config/db');
const { Schema } = mongoose;

const userSchema = new Schema({
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

userSchema.methods.comparePassword = async function (userPassword) {
    try {
        const isMatch = this.password == userPassword;
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const userModel = db.model('users', userSchema);

module.exports = userModel;