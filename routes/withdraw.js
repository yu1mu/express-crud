const express = require('express');
const db = require('../db/index');
const router = express.Router();

router.delete('/:id',  async (req, res, next) => {
    const id = req.params.id;

    const sql_search = 'SELECT * FROM user WHERE id = ?'
    try {
        const data = await db.query(sql_search, Number(id));
        if (data.length === 0) {
            res.status(404).send('Not Found User');
            return next();
        }
    } catch (err) {
        throw err;
    }

    const sql = 'DELETE FROM user WHERE id = ?';

    try {
        await db.query(sql, Number(id));
        res.status(204).end();
        return next();
    } catch (err) {
        throw err;
    }
});

module.exports = router;
