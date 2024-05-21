const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mainRoute = require('./routes/main')

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');
const gamesRouter = require('./routes/games');


const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cors, 
  bodyParser.json(),
  mainRoute,
  gamesRouter,

  express.static(path.join(__dirname, 'public')),
 
);

app.listen(PORT);