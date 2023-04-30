const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./user");

const tripSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    destination: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      default: Date.now,
    },
    activities: [
      {
        type: Schema.Types.ObjectId,
        ref: "Activities",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trip", tripSchema);
