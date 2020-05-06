const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const fib = require('./getFibNum');


const app = express();
const port = 5000;
const jsonParser = bodyParser.json();

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'testdb',
  password: 'qwerty3129',
});

connection.connect((err, notErr) => {
  if (err) {
    return console.error(`Ошибка: ${err.message}`);
  }
  return notErr;
});


app.post('/getNumber', jsonParser, (req, res) => {
  connection.query('INSERT INTO `testdb`.`success` (`ip`, `index`, `value`) VALUES (?, ?, ?)', [req.ip, req.body.number, fib(req.body.number)]);
  const gotNumber = req.body.number;
  const result = fib(gotNumber);
  res.status(200).json({
    fibNum: result,
    number: gotNumber,
  });
});


app.get('/infoget', (req, res) => {
  connection.query('SELECT * FROM `testdb`.`success`', (err, inf) => {
    if (err) { return console.log(err); }
    res.status(200).json({
      success: inf,
    });
    console.log(inf);
    return { inf };
  });
});


module.exports = app;

app.listen(port);
