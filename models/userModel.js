const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// modulo onde vamos criar o nosso modelo (Schema) de usuario no banco de dados
// onde esse usuario ira ter os campos emailm password, name

//o unico atributo de cada campo que é sempre obrigatorio é o type 
// para mais atributos olha a documentação do mongo https://mongoosejs.com/docs/schematypes.html
const userSchema = new mongoose.Schema({
  email: {
    type: String, // o tipo que o campo vai ser, podendo ser ele uma string, inteiro entre outros tipos, campo sempre obrigatorio
    required: true, // required quer dizer que o dado tem que o campo não pode ser vazio
    unique: true, // unique quer dizer que o campo é unico
    trim: true, //trim significa que o campo não pode conter espaços 
  },
  password: {
    type: String,
    required: true,
    trim: true,
    hidden: true, //hidden significa que quando fazermos uma pesquisa esse campo não pode ser exibido
  },
  name: {
    type: String,
  }
});

module.exports = mongoose.model('User', userSchema); 
// module exports é onde vamos disponibilizar os recursos desse modulo
// para que outros modulos possam usar
