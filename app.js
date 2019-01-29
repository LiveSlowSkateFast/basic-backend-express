import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';

import dotenv from 'dotenv'
dotenv.config()

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  const allowedOrigins = ['http://localhost:3000', 'https://localtest.com:3000']
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) res.header("Access-Control-Allow-Origin", origin)
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
})

app.use('/', router);

app.listen(3333, function () {
console.log('Example app listening on port 3333!')
});