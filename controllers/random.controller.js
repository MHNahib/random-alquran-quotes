const responce = require("../services/response");
const generate = require("../lib/random.verse");

const randomVerseFromSurah = async (res, url) => {
  try {
    const verse = await generate(url);

    // res.send(verse);
    response(res, true, verse, 200, "Successful");
  } catch (err) {
    console.log(err);
    responce(res, false, err, 400, err.message);
  }
};

module.exports = randomVerseFromSurah;
