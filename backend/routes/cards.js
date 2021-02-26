const router = require('express').Router();
const controller = require('../controllers/cards');
const createCardValidator = require('../validators/cardCreate');

router.get('cards', controller.getCards);
router.post('cards/', createCardValidator, controller.createCard);
router.delete('cards/:cardId', controller.deleteCard);
router.put('cards/:cardId/likes', controller.likeCard);
router.delete('cards/:cardId/likes', controller.dislikeCard);

module.exports = router;
