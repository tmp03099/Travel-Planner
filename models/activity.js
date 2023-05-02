const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  destination: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  notes: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
