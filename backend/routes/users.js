const router = require('express').Router();
const controller = require('../controllers/users');
const avatarPatchValidator = require('../validators/avatarPatch');
const userPatchValidator = require('../validators/avatarPatch');

router.get('users', controller.getUsers);
router.get('users/me', controller.getUserInfo);
router.get('users/:id', controller.getUser);
router.patch('users/me', userPatchValidator, controller.updateUser);
router.patch('users/me/avatar', avatarPatchValidator, controller.updateAvatar);

module.exports = router;
