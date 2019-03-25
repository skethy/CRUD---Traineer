const router = require('express').Router();
// router é uma função especifica do express responsavel por  definir as rotas
// onde as rotas são os endereços que vão nos fornercer as opções

const userController = require('../controllers/userController');

// pare entender os verbos http(get, post, entre outros) olhar o link: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods
const userRouter = () => {
  router.route('/')
    .get(userController.findAll)
    .post(userController.create);

  router.route('/:email')
    .get(userController.findOne)
    .put(userController.update)
    .delete(userController.remove);

  return router;
};

module.exports = userRouter;
