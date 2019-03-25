// require é usado para quando vamos chamar outro modulo da nossa aplicação
// seja um modulo feito por nos, ou por outras pessoas
const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./router/userRouter'); 
const swaggerUi = require('swagger-ui-express');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/treinamento'); // comando para conectar com o banco de dados

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
// body parser é modulo que vai passar de linha em linha da requisição enviado do front e ira montar objetos prontos para gente
// esse objetos são o body, params e heady

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/hello', (req, res) => res.json('Olá Mundo!')); // rota de teste para ver se nossa aplicação esta realmente rodando
app.use('/user', userRouter());

const swaggerDocument = require('./docs/documentation.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// swagger é o site que a gente viu de documentação e o a depencia que a gente chamou e usou de swaggerUi
// é usada para exibir o documentação do mesmo jeito que é no site

module.exports = app.listen(8000, () => console.log('Tá rodando')); 
// app.linten() comando onde o backend ira realmente começar a rodar
// e sera escutado a partir da porta 8000, localhost:8000/ 

