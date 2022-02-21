const axios = require("axios");

module.exports = async (surah_url, id) => {
  // convert id into number
  //   let id = req.params.id;
  id = parseInt(id);
  // validate paramitter
  if (id < 1 || id > 114)
    return res
      .status(400)
      .send(
        `There are 114 surahs in the Quran. Surah must have to be in between 1-114`
      );

  const responce = await axios.get(surah_url);

  const surah_id = id;
  // //   console.log(`${typeof sura_id} - surah`);
  const data = responce.data[surah_id - 1];

  // console.log();
  return (suraObject = {
    surah_no: data["id"],
    name: data["name"],
    transliteration: data["transliteration"],
    translation: data["translation"],
    type: data["type"],
    total_verses: data["total_verses"],
    verse: data["verses"],
  });
};
