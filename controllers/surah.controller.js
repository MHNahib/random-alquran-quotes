const surahFinder = require("../lib/surah.finder");
const responce = require("../services/response");

const surah = async (res, url, surahNo) => {
  try {
    const surah = await surahFinder(url, surahNo);
    responce(res, true, surah, 200, "ok");
  } catch (err) {
    console.log(err);
    responce(res, false, err, 400, err.message);
  }
};

module.exports = surah;
