const url = require("./password");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(url.url, {
  useNewUrlParser: true,
});

app.listen(3001, () => {
  console.log("Server is running on port 3001 :) (:");
});
