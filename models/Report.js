const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ReportSchema = new Schema({
  score: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Report = mongoose.model("reports", ReportSchema);
