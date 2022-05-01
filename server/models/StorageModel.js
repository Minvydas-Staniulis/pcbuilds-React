const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  cache: {
    type: String,
    required: true,
  },
  formFactor: {
    type: String,
    required: true,
  },
  interface: {
    type: String,
    required: true,
  },
  nvme: {
    type: String,
    required: true,
  },
});
