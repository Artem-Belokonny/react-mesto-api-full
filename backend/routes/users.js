const router = require('express').Router();
const controller = require('../controllers/users');
const avatarPatchValidator = require('../validators/avatarPatch');
const userPatchValidator = require('../validators/avatarPatch');
const registerValidator = require('../validators/register');
const authValidator = require('../validators/auth');

router.get('/', controller.getUsers);
router.get('/me', controller.getUserInfo);
router.get('/:id', controller.getUser);
router.patch('/me', userPatchValidator, controller.updateUser);
router.patch('/me/avatar', avatarPatchValidator, controller.updateAvatar);
router.post('/sign-in', authValidator, controller.login);
router.post('/sign-in', registerValidator, controller.createUser);

module.exports = router;
