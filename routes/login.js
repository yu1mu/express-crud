const express = require('express');
const db = require('../db/index');
const router = express.Router();

router.post('/', async (req, res) => {
    const reqId = req.body.id;
    const reqPw = req.body.pw;

    const sql = 'SELECT * FROM user WHERE user_id = ?';

    let result;
    try {
        result = await db.query(sql, reqId);

        const resPw = result[0].user_pw;

        if (resPw !== reqPw) return res.status(404).send('Login Failed!');
        else return res.status(200).send('Login Success!');
    } catch (err) {
        throw err;
    }
});

module.exports = router;