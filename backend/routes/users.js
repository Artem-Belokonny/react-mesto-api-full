const router = require('express').Router();
const controller = require('../controllers/users');
const avatarPatchValidator = require('../validators/avatarPatch');
const userPatchValidator = require('../validators/avatarPatch');
// const registerValidator = require('../validators/register');
// const authValidator = require('../validators/auth');

// router.post('/signin', authValidator, controller.login);
// router.post('/signup', registerValidator, controller.createUser);
router.get('users', controller.getUsers);
router.get('users/me', controller.getUserInfo);
router.get('users/:id', controller.getUser);
router.patch('users/me', userPatchValidator, controller.updateUser);
router.patch('users/me/avatar', avatarPatchValidator, controller.updateAvatar);

module.exports = router;
