const { celebrate, Joi } = require('celebrate');

const userPatch = celebrate({
  body: {
    name: Joi.string().min(2).max(30).required()
      .messages({
        'any.required': 'Обязательное поле',
      }),
    about: Joi.string().min(2).max(30).required()
      .messages({
        'any.required': 'Обязательное поле',
      }),
  },
});

module.exports = userPatch;
