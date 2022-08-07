/**
 * Language: all
 */
const express = require("express");
const axios = require("axios");
const router = express.Router();
const response = require("../../services/response");
const url = `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_bn.json`;
const generate = require("../../lib/random.verse");
const surah = require("../../controllers/surah.controller");
const randomVerseFromSurah = require("../../controllers/random.controller");

const language = require("../../lib/language");

const findInDB = require("../../database/db");

// get random quotes
router.get("/:language/:surahNo/:random?", async (req, res) => {
  // const verse = await generate(url);
  const { language, surahNo, random } = req.params;

  const isLanguageAvailable = language.includes(language);

  if (!isLanguageAvailable) {
    response(res, false, {}, 400, "Bad request. No language found.");
  }
  //   find db
  const findLanguageDB = findInDB(language);
  console.log(findLanguageDB);

  random ? randomVerseFromSurah(res, url) : surah(res, url, surahNo);
});

module.exports = router;
