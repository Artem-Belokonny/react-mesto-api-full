const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const cardCreate = celebrate({
  body: {
    name: Joi.string().min(2).required().messages({
      'any.required': 'Обязательное поле',
    }),
    link: Joi.string().required().custom((value, helper) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helper.message('Необходимо указать ссылку на фотографию');
    }).messages({
      'any.required': 'Обязательное поле',
    }),
  },
});

module.exports = cardCreate;
