const UserModel = require('../model/user_model');
const jwt = require('jsonwebtoken');

class UserServices {
    static async registerUser(username, email, password) {
        try {
            const createUser = new UserModel({ username, email, password });
            return await createUser.save();
        }
        catch (err) {
            throw err;
        }
    }

    static async checkUser(email) {
        try {
            return await UserModel.findOne({ email });
        }
        catch (error) {
            throw error;
        }
    }

    static async generateToken(tokenData, secretKey, jwt_expire) {
        return jwt.sign(tokenData, secretKey, { expiresIn: jwt_expire });
    }
}

module.exports = UserServices;