/**
 * Language: French
 */
const express = require("express");
const axios = require("axios");
const router = express.Router();
const url = `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_fr.json`;
const surahFinder = require("../../lib/surah.finder");

// get random quotes
router.get("/:id", async (req, res) => {
  const sura = await surahFinder(url, req.params.id);
  res.send(sura);
});

module.exports = router;

module.exports = router;
