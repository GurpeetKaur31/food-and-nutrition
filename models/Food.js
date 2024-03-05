const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  foodGroup: String,
  description: String,
  nutritionalInformation: String,
  servingSize: String,
  allergens: [String],
  ingredients: [String],
  preparationMethods: [String],
  certifications: [String],
  countryOfOrigin: String,
  brandOrManufacturer: String,
  dietaryRestrictions: [String],
  healthBenefits: [String],
  bestPractices: String
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
