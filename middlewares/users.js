const users = require('../models/user');
const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({});
  next();
}

const createGame = async (req, res, next) => {
  console.log("POST /games");
  try {
    console.log(req.body);
    req.game = await games.create(req.body);
    next();
  } catch (error) {
      res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
  }
}; 

module.exports = findAllUsers, createGame;