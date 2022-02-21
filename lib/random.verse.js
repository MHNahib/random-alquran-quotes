const axios = require("axios");

module.exports = async (url) => {
  const responce = await axios.get(url);
  //   console.log(responce.data);

  //   res.send(responce.data[0]);

  const sura_id = Math.floor(Math.random() * 114);
  const data = responce.data[sura_id];
  totalVerses = data["total_verses"];
  randomVerse = Math.floor(Math.random() * totalVerses);

  return (suraObject = {
    surah_no: data["id"],
    name: data["name"],
    transliteration: data["transliteration"],
    translation: data["translation"],
    type: data["type"],
    total_verses: data["total_verses"],
    verse: data["verses"][randomVerse],
  });
};
