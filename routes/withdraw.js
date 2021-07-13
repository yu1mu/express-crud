const express = require('express');
const db = require('../db/index');
const router = express.Router();

router.delete('/:id',  async (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM user WHERE id = ?';

    try {
        await db.query(sql, Number(id));
        return res.status(204);
    } catch (err) {
        throw err;
    }
});

module.exports = router;