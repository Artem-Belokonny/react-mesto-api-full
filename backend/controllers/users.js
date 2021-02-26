const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {
  NotFound, Conflict, Unauthorized, BadRequest,
} = require('../errors');

const getUsers = (req, res, next) => {
  User.find({})
    .then((user) => {
      if (!user) {
        throw new Unauthorized('Доступ запрещен, необходимо авторизоваться');
      }
      return res.status(200).send(user);
    })
    .catch(next);
};

const getUser = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new NotFound('Нет пользователя с таким id');
      }
      return res.status(200).send(user);
    })
    .catch(next);
};

const getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFound('Нет такого пользователя');
      }
      return res.status(200).send(user);
    })
    .catch(next);
};

// const createUser = (req, res, next) => {
//   const {
//     name, about, avatar, email,
//   } = req.body;
//   bcrypt.hash(req.body.password, 10)
//     .then((hash) => User.create({
//       name, about, avatar, email, password: hash,
//     }))
//     .then((user) => {
//       if (!user) {
//         throw new Conflict('Email уже используется');
//       }
//       return res.status(200).send(user);
//     })
//     .catch(next);
// };

const createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new Conflict('Email уже используется');
      }
      return bcrypt.hash(password, 10);
    })
    .then((password) => User.create({
      name, about, avatar, email, password,
    }))
    .then(({ _id, email }) => {
      res.status(200).send({ _id, email });
    })
    .catch(next);
};

const updateUser = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        throw new BadRequest('Произошла ошибка при отправке данных');
      }
      return res.status(200).send(user);
    })
    .catch(next);
};

const updateAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        throw new BadRequest('Произошла ошибка при отправке данных');
      }
      return res.status(200).send(user);
    })
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      if (!user) {
        throw new Unauthorized('Не правильный email или пароль');
      }
      const token = jwt.sign({ _id: user._id }, 'secret', { expiresIn: '7d' });
      res.send({ token });
    })
    .catch(next);
};

module.exports = {
  getUsers, getUser, createUser, updateUser, updateAvatar, login, getUserInfo,
};
