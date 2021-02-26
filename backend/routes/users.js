const router = require('express').Router();
const controller = require('../controllers/users');
const avatarPatchValidator = require('../validators/avatarPatch');
const userPatchValidator = require('../validators/avatarPatch');
const registerValidator = require('../validators/register');
const authValidator = require('../validators/auth');
const authMiddleware = require('../middlewares/auth');

router.post('/signin', authValidator, controller.login);
router.post('/signup', registerValidator, controller.createUser);
router.get('users', authMiddleware, controller.getUsers);
router.get('users/me', authMiddleware, controller.getUserInfo);
router.get('users/:id', authMiddleware, controller.getUser);
router.patch('users/me', userPatchValidator, authMiddleware, controller.updateUser);
router.patch('users/me/avatar', avatarPatchValidator, authMiddleware, controller.updateAvatar);

module.exports = router;
