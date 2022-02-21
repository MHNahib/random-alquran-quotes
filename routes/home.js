const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Welcome to random Al Quran Quotes. Have a great day`);
});

module.exports = router;
