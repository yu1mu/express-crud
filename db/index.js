const mysql = require('mysql');

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   port: 4406,
   password: 'rnjsgusqls0304',
   database: 'express_crud',
});

connection.connect();

module.exports = {
   query(sql, params) {
      return new Promise((resolve, reject) => {
         connection.query(sql, params, (err, result) => {
            if (err) return reject(err);
            return resolve(result);
         });
      })
   }
};
