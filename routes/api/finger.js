const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Finger Page");
});

module.exports = router;
