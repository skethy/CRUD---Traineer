const router = require('express').Router();

const funcController = require('../controllers/funcController');

const funcRouter = () => {
  router.route('/')
    .get(funcController.findAll)
    .post(funcController.create);

  router.route('/:cpf')
    .get(funcController.findOne)
    .put(funcController.update)
    .delete(funcController.remove);

  return router;
};

module.exports = funcRouter;
