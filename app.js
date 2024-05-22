const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const path = require('path');

const {apiRouter} = require("./routes/apiRouter");

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cors, 
  cookieParser(),
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  apiRouter,
);

app.listen(PORT);
