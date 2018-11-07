const User = require('../models/userModel');

const create = async (req, res) => {
  try {
    const { username, password, name } = req.body;
    const user = new User({
      username,
      password,
      name,
    });
    await user.save();
    return res.json({ message: 'Usuário criado!', user });
  } catch (error) {
    return res.json({ message: 'Deu erro!', error })
  }
};

const findAll = async (req, res) => {
  try {
    const users = await User.find({});
    return res.json({ message: 'Usuarios encontrados', users });
  } catch (error) {
    return res.json({ message: 'Deu erro!', error })
  }
};

const findOne = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username: username.toUpperCase() });
    if (!user) return res.json({ message: 'Usuário não encontrado' });
    return res.json({ message: 'Usuario encontrados', user });
  } catch (error) {
    return res.json({ message: 'Deu erro!', error })
  }
};

const update = async (req, res) => {
  try {
    const { username: newUsername, password, name } = req.body;
    const { username } = req.params;
    const updatedUser = await User.findOneAndUpdate(
      {
        username: username.toUpperCase()
      },
      {
        username: newUsername,
        password,
        name,
      }
    );
    if (!updatedUser) return res.json({ message: 'Usuário não encontrado' });
    const user = await User.findOne({ username });
    return res.json({ message: 'Usuario atualizado', user });
  } catch (error) {
    return res.json({ message: 'Deu erro!', error })
  }
};


const remove = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOneAndRemove({ username: username.toUpperCase() });
    if (!user) return res.json({ message: 'Usuário não encontrado' });
    return res.json({ message: 'Usuario removido', removedUser: user});
  } catch (error) {
    return res.json({ message: 'Deu erro!', error })
  }
};



module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
