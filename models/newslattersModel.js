const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  }
});

const newslattersModel = mongoose.model('newslatters', schema);

module.exports = newslattersModel;