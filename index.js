const express = require('express');
const db = require('./db/index');
const changePasswordRouter = require('./routes/changePassword');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const signUpRouter = require('./routes/signUp');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/', indexRouter);
app.use('/changePassword', changePasswordRouter);
app.use('/login', loginRouter);
app.use('/signUp', signUpRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});