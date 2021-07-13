const express = require('express');
const db = require('../db/index');
const router = express.Router();

router.post('/', async (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;
    const name = req.body.name;

    const sql = 'INSERT INTO user(user_id, user_pw, user_name) VALUES (?, ?, ?)';

    try {
        await db.query(sql, [id, pw, name]);
        return res.status(200).send('Sign Up Success!');
    } catch (err) {
        throw err;
    }
});

module.exports = router;