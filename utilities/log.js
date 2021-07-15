const reqIp = require('request-ip');
const fs = require('fs');

function createLog(req, res) {
    const method = req.method;
    const timestamp = new Date().toLocaleString();
    const ip = reqIp.getClientIp(req);
    const status = res.statusCode;
    const url = req.originalUrl;

    const data = `[${method}] ${timestamp} || ${ip} ${url} ${status}\n`;

    fs.appendFile("././storage/log.txt", data, function (err) {
        if (err) return console.log(err);
    });
}

module.exports = {
    createLog
}