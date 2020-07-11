const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ReportSchema = new Schema({
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  postalCode: {
    type: Number,
    required: true,
  },
  existingConditions: {
    type: [String],
    required: true,
  },
  intTravel: {
    type: String,
    required: true,
  },
  hotspotZone: {
    type: String,
    required: true,
  },
  aroundCovidPatient: {
    type: String,
    required: true,
  },
  liveFacility: {
    type: String,
    required: true,
  },
  carAccess: {
    type: String,
    required: true,
  },
  symptoms: {
    type: [String],
    required: true,
  },
  videoResult: {
    type: String,
    required: true,
  },
  xrayResult: {
    type: String,
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
