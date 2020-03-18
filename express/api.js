const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>It works!</h1>');
  res.end();
});

app.use(cookieParser());
app.use(bodyParser.json());
// path must route to lambda
app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);