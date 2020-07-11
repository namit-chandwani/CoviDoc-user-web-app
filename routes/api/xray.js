const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Xray Page");
});

module.exports = router;
