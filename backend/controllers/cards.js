const mongoose = require('mongoose');
const Card = require('../models/card');
const { NotFound, Unauthorized, BadRequest } = require('../errors');

const getCards = (req, res, next) => {
  Card.find({})
    .then((user) => {
      if (!user) {
        throw new NotFound('Нет карточки с таким id');
      }
      return res.status(200).send(user);
    })
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => {
      if (!card) {
        throw new BadRequest('Произошла ошибка при отправке данных');
      }
      return res.status(200).send(card);
    })
    .catch(next);
};

const deleteCard = (req, res, next) => {
  Card.findByIdAndRemove(req.params.cardId)
    .orFail(() => {
      throw new NotFound('Такой карточки не существует');
    })
    .then((card) => res.status(200).send(card))
    .catch(next);
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      throw new NotFound('Такой карточки не существует');
    })
    .then((card) => res.status(200).send({ data: card }))
    .catch(next);
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      throw new NotFound('Такой карточки не существует');
    })
    .then((card) => res.status(200).send({ data: card }))
    .catch(next);
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
