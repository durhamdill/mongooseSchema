const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  species: String,
  gender: String,
  age: Number,
  nicknames: [String],
  diet: [{
    foodType: String,
    frequency: String,
    quantity: String,
  }]
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
