const router = require('express').Router();
const controller = require('../controllers/users');
const avatarPatchValidator = require('../validators/avatarPatch');
const userPatchValidator = require('../validators/userPatch');

router.get('/', controller.getUsers);
router.get('/me', controller.getUserInfo);
router.get('/:id', controller.getUser);
router.patch('/me', userPatchValidator, controller.updateUser);
router.patch('/me/avatar', avatarPatchValidator, controller.updateAvatar);

module.exports = router;
