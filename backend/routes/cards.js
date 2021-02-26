const router = require('express').Router();
const controller = require('../controllers/cards');
const createCardValidator = require('../validators/cardCreate');
const authMiddleware = require('../middlewares/auth');

router.get('cards', authMiddleware, controller.getCards);
router.post('cards/', createCardValidator, authMiddleware, controller.createCard);
router.delete('cards/:cardId', authMiddleware, controller.deleteCard);
router.put('cards/:cardId/likes', authMiddleware, controller.likeCard);
router.delete('cards/:cardId/likes', authMiddleware, controller.dislikeCard);

module.exports = router;
