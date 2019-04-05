const Func = require('../models/funcModels');

const create = async (req, res) => {
  try {
    const {name, cpf, telefone, cep, numero, complemento} = req.body;

    const func = new Func({
      name,
      cpf,
      telefone,
      cep,
      numero,
      complemento
    });


    await func.save();
    return res.status(201).json({ message: 'Funcionário Criado!', func });
  } catch (error) {
    return res.status(401).json({ message: 'Erro ao Criar!'})
  }
}; 

const findAll = async (req, res) => {
  try {
    const funcs = await Func.find({}); 
    return res.status(200).json({ message: 'Funcionários Encontrados', funcs });
  
  } catch (error) {
    return res.status(401).json({ message: 'Erro ao Encontrar os Funcionarios!', error })
  }
};

const findOne = async (req, res) => {
  try {
    const { cpf } = req.params;
    const func = await Func.findOne({ cpf: cpf });
      if (!func){
      return res.status(404).json({ message: 'Funcionário Não Encontrado!' });
    } 
    return res.status(200).json({ message: 'Funcionario Encontrado', func });
  } catch (error) {
    return res.status(401).json({ message: 'Erro ao Encontrar!', error })
  }
};


/*Update de usuario. 
  Atualização apenas dos parametros passados pelo body.
*/
const update = async (req, res) => {
  try {
    const { cpf } = req.params;
    const infoFunc = req.body;
    await Func.update({cpf: cpf},{$set: infoFunc})

    const user = await Func.findOne({cpf:cpf}) 
      if (!user) {
        return res.status(404).json({ message: 'Funcionário Não Encontrado' });
      }
    res.status(200).send({'Funcionario Atualizado': user});
  } catch (error) {
    return res.status(401).json({ message: 'Erro ao Atualizar!', error })
  }
};


const remove = async (req, res) => {
  try {
    const { cpf } = req.params;
    const func = await Func.findOneAndRemove({ cpf: cpf });
    if (!func) {
      return res.status(404).send('Funcionário Não Encontrado');
    } 
    return res.status(200).json('Funcionário Removido');
  } catch (error) {
    return res.status(401).send('Erro!')
  }
};



module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
