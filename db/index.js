const mysql = require('mysql');
const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   port: 4406,
   password: 'rnjsgusqls0304',
   database: 'express_crud',
});

connection.connect();

module.exports = connection;