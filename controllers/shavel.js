// контроллер auth
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { Conflict } = require('../errors');
const { Unauthorized } = require('../../../123/черновик/errors');

// регистр это createUser
const register = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new Conflict('Указанный email уже используется');
      }
      return bcrypt.hash(password, 10);
    })
    .then((password) => {
      return User.create({email, password});
    })
    .then(({ _id, email }) => {
      res.send({ _id, email });
    })
    .catch(next);
};

// регистр это login
const auth = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new Unauthorized('Не правильный email или пароль');
      }
      return bcrypt.compare(password, user.password)
      .then((isValid) => {
        if (isValid) {
          return user;
        }
        throw new Unauthorized('Не правильный email или пароль');
      })
    })
    .then(({ _id }) => {
      jwt.sign({ _id }, {expiresIn: '7d'}),
    })
    .then(({ _id, email }) => {
      res.send({ _id, email });
    })
    .catch(next);
};

module.exports = {
  register,
  auth,
};
