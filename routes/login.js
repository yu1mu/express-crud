const express = require('express');
const db = require('../db/index');
const router = express.Router();

router.post('/', (req, res) => {
    const reqId = req.body.id;
    const reqPw = req.body.pw;

    const sql = 'SELECT * FROM user WHERE user_id = ?';

    db.query(sql, [reqId, reqPw], (err, result) => {
        const resPw = result[0].user_pw;

        if (err) throw err;

        if(resPw !== reqPw) res.status(404).send('Login Failed!');
        else res.status(200).send('Login Success!');
    });
});

module.exports = router;