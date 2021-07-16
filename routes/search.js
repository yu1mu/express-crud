const express = require('express');
const db = require('../db/index');
const router = express.Router();

const filters = require('../utilities/filter');

router.post('/', async (req, res, next) => {
    const param_options = ["id", "pw", "name"];
    let sql = 'SELECT * FROM user where ';
    const searchFilter = filters.searchFilter(req.body, param_options);

    sql += searchFilter.whereClause;

    const result = await db.query(sql, searchFilter.params);

    res.json({sql, result});

    return next();
});

module.exports = router;