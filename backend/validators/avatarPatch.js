const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const avatarPatch = celebrate({
  body: {
    avatar: Joi.string().required().custom((value, helper) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helper.message('Необходимо указать ссылку на аватарку');
    }).messages({
      'any.required': 'Обязательное поле',
    }),
  },
});

module.exports = avatarPatch;
