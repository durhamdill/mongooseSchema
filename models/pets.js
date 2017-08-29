const mongoose = require('mongoose');
const bluebird = require('bluebird');
const mongodb = require('mongodb');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  species: String,
  gender: String,
  age: Number,
  diet: [{
    frequency: {Number},
    quantity: {Number},
    type: String,
  }],
  nicknames: [String],
});

const Pets = mongoose.model('Pets', petSchema);

module.exports = Pets;
