const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true 
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
