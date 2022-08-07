const responce = require("../services/response");
const generate = require("../lib/random.verse");

const randomVerseFromSurah = async (res, url) => {
  try {
    console.log(url);
    const verse = await generate(url);
    responce(res, true, verse, 200, "Successful");
  } catch (err) {
    console.log(err);
    responce(res, false, err, 400, err.message);
  }
};

module.exports = randomVerseFromSurah;
