const express = require('express');
const path = require('path');
const cors = require('./middlewares/cors')
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 
const PORT = 3000;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(
  cors,
  bodyParser.json(),
  mainRoute, 
  gamesRouter, 
  express.static(path.join(__dirname, 'public')),
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
})