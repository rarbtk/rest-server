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
  role: {
    type: String,
    required: true,
    emun: ["Amind_role", "User_role"],
  },
});

module.exports = model("personas", personaSchema);
