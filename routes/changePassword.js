const express = require('express');
const db = require('../db/index');
const router = express.Router();

router.patch('/:id', async (req, res, next) => {
    const id = req.params.id;
    const afterPw = req.body.pw;

    const sql = 'UPDATE user SET user_pw = ? WHERE id = ?';

    try {
        await db.query(sql, [afterPw, Number(id)]);
        res.status(200).send('Password changed!');
        return next();
    } catch (err) {
        throw err;
    }
});

module.exports = router;