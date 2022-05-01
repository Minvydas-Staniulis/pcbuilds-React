const mongoose = require("mongoose");

const CpuCoolerSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  fanRpm: {
    type: String,
    required: true,
  },
  noiseLevel: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  cpuSocket: {
    type: String,
    required: true,
  },
  waterCooled: {
    type: Boolean,
    required: true,
  },
  fanless: {
    type: Boolean,
    required: true,
  },
});
