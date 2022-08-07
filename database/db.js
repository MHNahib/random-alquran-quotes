const db = [
  {
    language: "bn",
    url: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_bn.json",
  },
  {
    language: "en",
    url: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_en.json",
  },
  {
    language: "es",
    url: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_es.json",
  },
  {
    language: "fr",
    url: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_fr.json",
  },
  {
    language: "id",
    url: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_id.json",
  },
  {
    language: "ru",
    url: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_ru.json",
  },
  {
    language: "sv",
    url: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_sv.json",
  },
  {
    language: "tr",
    url: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_tr.json",
  },
  {
    language: "ur",
    url: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_ur.json",
  },
  {
    language: "zh",
    url: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_zh.json",
  },
];

module.exports = (language) => {
  return db.find((values) => values.language === language);
};
