const categoriesRouter = require('express').Router();

const findAllCategories = require('../middlewares/categories');
const sendAllCategories = require('../controllers/categories'); 
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

const createCategory = require('../middlewares/categories');
const sendCategoryCreated = require('../controllers/categories');
categoriesRouter.post("/categories", findAllCategories, createCategory, sendCategoryCreated);

const findCategoryById = require('../middlewares/categories');
const sendCategoryById = require('../controllers/categories');
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);


const updateCategory = require('../middlewares/categories');
const sendCategoryUpdated = require('../controllers/categories');
categoriesRouter.put("/categories/:id", updateCategory, sendCategoryUpdated);
module.exports = categoriesRouter;
  