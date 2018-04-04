const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pirateSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  position: { type: String, required: true },
  crew: { type: String, required: true },
  selected: {type: Boolean, required: true, default: false},
  date: { type: Date, default: Date.now }
});

const Pirate = mongoose.model("Pirate", pirateSchema);

module.exports = Pirate;
