const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`Connected to DB: ${process.env.DB_CONNECTION}`);
  }
);

module.exports = {
  User: require("../models/user"),
};
