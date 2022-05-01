const mongoose = require("mongoose");

const CpuSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  coreCount: {
    type: Number,
    required: true,
  },
  perfomanceCoreClock: {
    type: String,
    required: true,
  },
  perfomanceBoostClock: {
    type: String,
    required: true,
  },
  tdp: {
    type: String,
    required: true,
  },
  socket: {
    type: String,
    required: true,
  },
  maxSupportedMemory: {
    type: String,
    required: true,
  },
});
