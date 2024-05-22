const usersRouter = require('express').Router();

const {
    findAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail
} = require('../middlewares/users')

const {
    sendAllUsers,
    sendUserCreated,
    sendUserById,
    sendUserUpdated,
    sendUserDeleted
} = require('../controllers/users');

usersRouter.get(
    '/users',
    findAllUsers,
    sendAllUsers
);

usersRouter.get(
    "/users/:id",
    findUserById,
    sendUserById
);

usersRouter.delete(
    "/users/:id",
    deleteUser,
    sendUserDeleted
);

usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    createUser,
    sendUserCreated
);

usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    updateUser,
    sendUserUpdated
);

module.exports = { usersRouter };
