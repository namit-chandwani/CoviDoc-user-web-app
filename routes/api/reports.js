const express = require("express");
let Report = require("../../models/Report");
const router = express.Router();

router.get("/", (req, res) => {
  Report.find()
    // Report.find({ user: req.user.id })
    .then((reports) => res.json(reports))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  // req.body.user = req.user.id;

  const reportData = {
    score: req.body.score,
    user: "5f09d27f5a02b01862e29470",
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
