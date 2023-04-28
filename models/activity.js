const Schema = require("mongoose").Schema;

const activity = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  destination: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
  },
  notes: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

module.exports = activity;
