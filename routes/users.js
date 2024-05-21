const usersRouter = require('express').Router();
const findAllUsers = require('../middlewares/users');
const sendAllUsers = require('../controllers/users');  

categoriesRouter.get('/categories', findAllUsers, sendAllUsers);
  
module.exports = usersRouter;
  