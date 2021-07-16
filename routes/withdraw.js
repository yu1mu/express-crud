const express = require('express');
const db = require('../db/index');
const router = express.Router();

router.delete('/:id',  async (req, res, next) => {
    const id = req.params.id;

    const sqlA = 'SELECT * FROM user WHERE id = ?'
    try {
        const data = await db.query(sqlA, Number(id));
        next ();
        if (data.length === 0) return res.status(404).send('Not Found User');
    } catch (err) {
        throw err;
    }

    const sql = 'DELETE FROM user WHERE id = ?';

    try {
        await db.query(sql, Number(id));
        next();
        return res.status(204).end();

    } catch (err) {
        throw err;
    }
});

module.exports = router;
