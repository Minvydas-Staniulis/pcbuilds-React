const mongoose = require("mongoose");

MemorySchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  formFactor: {
    type: String,
    required: true,
  },
  modules: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  firstWordLatency: {
    type: String,
    required: true,
  },
  casLatency: {
    type: String,
    required: true,
  },
  voltage: {
    type: Number,
    required: true,
  },
});
