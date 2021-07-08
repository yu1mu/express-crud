const express = require('express');
const db = require('../db/index');
const router = express.Router();

router.post('/', (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;
    const name = req.body.name;

    const sql = 'INSERT INTO user(user_id, user_pw, user_name) VALUES (?, ?, ?)';

    db.query(sql, [id, pw, name], (err) => {
        if (err) throw err;
        res.status(200).send('Sign Up Success!');
    });
});

module.exports = router;