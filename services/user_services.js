const UserModel = require('../model/user_model');

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
}

module.exports = UserServices;