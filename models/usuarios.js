const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const personaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "required a password"],
  },
  img: {
    type: String,
  },
  state: {
    type: String,
    required: true,
    emun: ["ADMIN", "USER"],
  },
  google:{
    type: Boolean,
    default: false
  }
});

module.exports = model("personas", personaSchema);
