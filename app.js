const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mainRoute = require('./routes/main')
const gamesRouter = require('./routes/games');

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');


const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cors, 
  bodyParser.json(),
  mainRoute,
  express.static(path.join(__dirname, 'public')),
  gamesRouter, 
);

app.listen(PORT);