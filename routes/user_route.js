const route = require('express').Router();
const userController = require('../controllers/user_controller');

route.post('/registration', userController.register);
route.post('/login',userController.login);

module.exports = route;