const express = require('express');
const mysql = require('mysql');
const db = require('./db/index');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/user', (req, res) => {
    db.query('SELECT * FROM user', (err, result) => {
        if (err) throw err;
        console.log('User info: ', result);
        res.send(result);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});