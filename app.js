import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';

import dotenv from 'dotenv'
dotenv.config()

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (_req, res, next) {
  res.header("Access-Control-Allow-Origin", 'http://localhost:3000')
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
})

app.use('/', router);

app.listen(3333, function () {
console.log('Example app listening on port 3333!')
});