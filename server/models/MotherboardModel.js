const mongoose = require("mongoose");

const MotherboardSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  socketCpu: {
    type: String,
    required: true,
  },
  chipset: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
