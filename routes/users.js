const usersRouter = require('express').Router();
const findAllUsers = require('../middlewares/users');
const sendAllUsers = require('../controllers/users');
const createUser = require('../middlewares/users');
const sendUserCreated = require('../controllers/users')
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);

const findUserById = require('../middlewares/users');
const sendUserById = require('../controllers/users');
usersRouter.get("/users/:id", findUserById, sendUserById);

const updateUser = require('../middlewares/users');
const sendUserUpdated = require('../controllers/users');
usersRouter.put(
    "/users/:id",
    updateUser,
    sendUserUpdated
);


const deleteUser = require('../middlewares/users');
const sendUserDeleted = require('../controllers/users');
usersRouter.delete(
    "/games/:id",
    deleteUser,
    sendUserDeleted
  );

module.exports = usersRouter;
