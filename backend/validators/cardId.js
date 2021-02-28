const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const cardId = celebrate({
  params: {
    id: Joi.string().required().custom((value, helper) => {
      if (validator.isMongoId(value)) {
        return value;
      }
      return helper.message('Передан неверный id пользователя');
    }).messages({
      'any.required': 'Обязательное поле',
    }),
  },
});

module.exports = cardId;
