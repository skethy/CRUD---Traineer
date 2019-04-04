const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./router/funcRouter'); 

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/funcionarios');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/user', userRouter());

module.exports = app.listen(3000, () => console.log('Conexão Realizada!')); 