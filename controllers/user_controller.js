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

exports.login=async(req,res,next)=> {
    try {
        
    } 
    catch (error) {
        print(error);
    }
}