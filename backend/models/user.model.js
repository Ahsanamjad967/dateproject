const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  nationality: String,
  gender: {
    type: String,
    enum: ["male", "female"],
  },

  dateOfBirth: Date,
  dateOfGraduation: Date,
});

module.exports = mongoose.model("user", userSchema);
