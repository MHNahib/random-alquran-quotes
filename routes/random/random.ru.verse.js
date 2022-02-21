/**
 * Language: Russian
 */
const express = require("express");
const axios = require("axios");
const router = express.Router();
const url = `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_ru.json`;
const generate = require("../../lib/random.verse");

// get random quotes
router.get("/", async (req, res) => {
  const verse = await generate(url);

  res.send(verse);
});

module.exports = router;
