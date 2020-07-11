const express = require("express");
let Report = require("../../models/Report");
const router = express.Router();

router.get("/", (req, res) => {
  //   Report.find({ user: req.user.id })
  Report.find()
    .then((reports) => res.json(reports))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  //   req.body.user = req.user.id;
  const reportData = {
    age: req.body.age,
    gender: req.body.gender,
    postalCode: req.body.postalCode,
    existingConditions: req.body.existingConditions,
    intTravel: req.body.intTravel,
    hotspotZone: req.body.hotspotZone,
    aroundCovidPatient: req.body.aroundCovidPatient,
    liveFacility: req.body.liveFacility,
    carAccess: req.body.carAccess,
    symptoms: req.body.symptoms,
    videoResult: req.body.videoResult,
    xrayResult: req.body.xrayResult,
    user: req.body.user,
    createdAt: req.body.createdAt,
  };
  const newReport = new Report(reportData);
  newReport
    .save()
    .then(() => res.json("Report Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
  Report.findById(req.params.id)
    .then((report) => res.json(report))
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.delete("/:id", (req, res) => {
//   Report.findByIdAndDelete(req.params.id)
//     .then(() => res.json("Report Deleted!"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

module.exports = router;
