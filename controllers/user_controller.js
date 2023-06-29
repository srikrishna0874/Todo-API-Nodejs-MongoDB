const UserService = require('../services/user_services');

exports.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const success = await UserService.registerUser(username, email, password);
        res.json({
            status: true,
            success: "User registered successfully!!"
        });
    }
    catch (err) {
        throw err;
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserService.checkUser(email);
        if (!user) {
            throw new Error("User doesn't exists");
        }
        else {
            console.log("-------user is:--------");
            console.log(user);
            const isMatch = await user.comparePassword(password);
            if(!isMatch) {
                throw new Error("Invalid Password");
            }
            else {
                let tokenData={
                    _id: user._id,
                    email: user.email,
                };
                const token=await UserService.generateToken(tokenData,'serviceKey', '1h');
                res.status(200).json({
                    status: "true",
                    token: token,
                });
            }
        }

    }
    catch (error) {
        throw error;
    }
}