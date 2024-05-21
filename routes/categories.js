const categoriesRouter = require('express').Router();

const findAllCategories = require('../middlewares/categories');
const sendAllCategories = require('../controllers/categories');  
const createCategory = require('../controllers/games');
const sendCategoryCreated = require('../middlewares/games');
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", findAllCategories, createCategory, sendCategoryCreated);
module.exports = categoriesRouter;
  