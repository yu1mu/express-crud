const express = require('express');
const db = require('../db/index');
const router = express.Router();

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM user WHERE id = ?';

    db.query(sql, Number(id), (err) => {
        if (err) throw err;
        res.status(204);
    });
});

module.exports = router;