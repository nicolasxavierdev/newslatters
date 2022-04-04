const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const newslattersRoute = require('./routes/newslattersRoute')

const app = express();

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/newsletters')

app.use('/newslatters', newslattersRoute);

app.listen(3000, () => {
  console.log('rodando na porta 3000');
});
