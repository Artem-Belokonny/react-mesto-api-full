const mongoose = require('mongoose');
const Card = require('../models/card');
const { NotFound, BadRequest, Conflict } = require('../errors');

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        throw new BadRequest('Необходимо указать ссылку на картинку');
      }
      next(err);
    });
};

const deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFound('Карточка не найдена');
      }
      if (String(card.owner) !== String(req.user._id)) {
        throw new Conflict('Нельзя удалять чужие фотографии');
      }
      Card.findByIdAndRemove(card._id)
        .then(() => {
          res.send({ message: 'Фотография удалена' });
        });
    })
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
