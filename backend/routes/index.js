const router = require('express').Router();

const userRoutes = require('./users');
const cardRoutes = require('./cards');
// const authMiddleware = require('../middlewares/auth');

router.use('/', userRoutes);
router.use('/', cardRoutes);
router.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

module.exports = router;
