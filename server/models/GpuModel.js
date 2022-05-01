const mongoose = require("mongoose");

const GpuSchema = mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  chipset: {
    type: String,
    required: true,
  },
  memory: {
    type: String,
    required: true,
  },
  coreClock: {
    type: String,
    required: true,
  },
  boostClock: {
    type: String,
    required: true,
  },
  interface: {
    type: String,
    required: true,
  },
  tdp: {
    type: String,
    required: true,
  },
  cooling: {
    type: String,
    required: true,
  },
  hdmiOutputs: {
    type: String,
    required: true,
  },
  displayPortOutputs: {
    type: String,
    required: true,
  },
});
