const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routes');
const controller = require('./controllers/users');
const errorHandler = require('./middlewares/errorHandler');
const registerValidator = require('./validators/register');
const authValidator = require('./validators/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(requestLogger);

app.post('/sign-in', authValidator, controller.login);
app.post('/sign-up', registerValidator, controller.createUser);

app.use('/', router);

app.use(errorLogger);

app.use(errorHandler);

app.listen(PORT);
