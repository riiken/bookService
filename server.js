const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes');
const port=3000;

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});