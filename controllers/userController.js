const User = require('../models/userModel');

const create = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    // o body-parser a partir da requisição (req) do frontend monta 3 objetos
    // o req.body, req.params e req.header

    // crio um novo objeto do tipo User
    const user = new User({
      email,
      password,
      name,
    });

    //salvo esse objeto no banco de dados
    await user.save();
    return res.status(201).json({ message: 'Usuário criado!', user });
  } catch (error) {
    return res.status(500).json({ message: 'Deu erro!', error })
  }
};

const findAll = async (req, res) => {
  try {
    const users = await User.find({}); //função para procurar todos os usuarios
    return res.status(200).json({ message: 'Usuarios encontrados', users });
  } catch (error) {
    return res.status(500).json({ message: 'Deu erro!', error })
  }
};

const findOne = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email: email }); //função para procurar um usuario somente
    // onde o primeiro email é o parametro do banco que vamos procurarar e o segundo é o valor
    if (!user){
      return res.status(404).json({ message: 'Usuário não encontrado' });
    } 
    return res.status(200).json({ message: 'Usuario encontrado', user });
  } catch (error) {
    return res.status(500).json({ message: 'Deu erro!', error })
  }
};

const update = async (req, res) => {
  try {
    const { email: newemail, password, name } = req.body;
    const { email } = req.params;
    const updatedUser = await User.findOneAndUpdate(
      {
        email: email
      },
      {
        email: newemail,
        password,
        name,
      }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    } 
    return res.status(200).send('Usuario atualizado');
  } catch (error) {
    return res.status(500).json({ message: 'Deu erro!', error })
  }
};


const remove = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOneAndRemove({ email: email });
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    } 
    return res.status(200).json('Usuario removido');
  } catch (error) {
    return res.status(500).send('Deu erro!')
  }
};



module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
