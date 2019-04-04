const mongoose = require('mongoose');


const funcionarioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: Number,
    required: true,
    unique: true
  },
  telefone: {
    type: Number
  },
  cep: {
    type: String
  },
  numero: {
    type: Number
  },
  complemento: {
    type: String
  }
});

module.exports = mongoose.model('Func', funcionarioSchema); 
