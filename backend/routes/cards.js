const router = require('express').Router();
const controller = require('../controllers/cards');
const createCardValidator = require('../validators/cardCreate');

router.get('/', controller.getCards);
router.post('/', createCardValidator, controller.createCard);
router.delete('/:cardId', controller.deleteCard);
router.put('/:cardId/likes', controller.likeCard);
router.delete('/:cardId/likes', controller.dislikeCard);

module.exports = router;
