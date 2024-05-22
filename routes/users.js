const usersRouter = require('express').Router();

const {
    findAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser
} = require('../middlewares/users')

const {
    sendAllUsers,
    sendUserCreated,
    sendUserById,
    sendUserUpdated,
    sendUserDeleted
} = require('../controllers/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.put("/users/:id", updateUser, sendUserUpdated);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);

module.exports = {usersRouter};
