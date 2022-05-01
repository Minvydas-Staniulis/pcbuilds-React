const mongoose = require("mongoose");

const CaseSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
