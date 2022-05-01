const mongoose = require("mongoose");

const OperatingSystemSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
  },
  maxMemory: {
    type: String,
    required: true,
  },
});
