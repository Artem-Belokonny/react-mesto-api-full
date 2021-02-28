const router = require('express').Router();
const controller = require('../controllers/cards');
const createCardValidator = require('../validators/cardCreate');
const cardIdValidator = require('../validators/cardId');

router.get('/', controller.getCards);
router.post('/', createCardValidator, controller.createCard);
router.delete('/:cardId', cardIdValidator, controller.deleteCard);
router.put('/:cardId/likes', cardIdValidator, controller.likeCard);
router.delete('/:cardId/likes', cardIdValidator, controller.dislikeCard);

module.exports = router;
