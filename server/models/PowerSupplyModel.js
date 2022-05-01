const mongoose = require("mongoose");

const PowerSupplySchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  efficiencyRating: {
    type: String,
    required: true,
  },
  wattage: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  modular: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  fanless: {
    type: String,
    required: true,
  },
  pcie12Pin: {
    type: String,
    required: true,
  },
  pcie8Pin: {
    type: String,
    required: true,
  },
  pcie62Pin: {
    type: String,
    required: true,
  },
  pcie6Pin: {
    type: String,
    required: true,
  },
  molex4Pin: {
    type: String,
    required: true,
  },
});
