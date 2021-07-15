const express = require('express');
const changePasswordRouter = require('./routes/changePassword');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const searchRouter = require('./routes/search');
const signUpRouter = require('./routes/signUp');
const withdrawRouter = require('./routes/withdraw');
const log = require('./utilities/log');

const app = express();
const port = 3000;

const logger = function (req, res, next) {
    log.createLog(req, res);
    next();
}

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/', indexRouter);
app.use('/changePassword', changePasswordRouter);
app.use('/login', loginRouter);
app.use('/search', searchRouter);
app.use('/signUp', signUpRouter);
app.use('/withdraw', withdrawRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});