const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Create a new food item
router.post('/', async (req, res) => {
  try {
    const food = await Food.create(req.body);
    res.status(201).json(food);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Retrieve all food items
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Retrieve a specific food item by ID
router.get('/:id', getFood, (req, res) => {
  res.json(res.food);
});

// Update a food item
router.put('/:id', getFood, async (req, res) => {
  try {
    Object.assign(res.food, req.body);
    const updatedFood = await res.food.save();
    res.json(updatedFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a food item
router.delete('/:id', getFood, async (req, res) => {
  try {
    await res.food.remove();
    res.json({ message: 'Food item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getFood(req, res, next) {
  try {
    const food = await Food.findById(req.params.id);
    if (food == null) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.food = food;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
