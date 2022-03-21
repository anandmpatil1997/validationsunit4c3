const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    profileimages: { type: String, required: true, unique: true },
    timestamps : { type: String, required: true, unique: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
