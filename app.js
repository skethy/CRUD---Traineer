const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./router/userRouter');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/treinamento');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/helloWorld', (req, res) => res.json('Coé Rapaziada!'));
app.use('/user', userRouter());

app.listen(8000, () => console.log('Tá rodando'));
