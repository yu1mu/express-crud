const express = require('express');
const db = require('../db/index');
const router = express.Router();

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const afterPw = req.body.pw;

    const sql = 'UPDATE user SET user_pw = ? WHERE id = ?';

    db.query(sql, [afterPw, Number(id)], (err, result) => {
        if (err) throw err;
        res.status(200).send('Password changed!');
    });
});

module.exports = router;