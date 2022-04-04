const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  }
});

const newslettersModel = mongoose.model('newsletters', schema);

module.exports = newslettersModel;