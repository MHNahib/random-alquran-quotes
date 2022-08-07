const express = require("express");
const helmet = require("helmet");
var cors = require("cors");
const asyncError = require("express-async-errors");
const rateLimit = require("express-rate-limit");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDocs = YAML.load("./docs/api.yaml");
const error = require("./middleware/error");
const home = require("./routes/home");
const bnRandom = require("./routes/random/random.bn.verse");
const enRandom = require("./routes/random/random.en.verse");
const esRandom = require("./routes/random/random.es.verse");
const frRandom = require("./routes/random/random.fr.verse");
const idRandom = require("./routes/random/random.id.verse");
const ruRandom = require("./routes/random/random.ru.verse");
const svRandom = require("./routes/random/random.sv.verse");
const trRandom = require("./routes/random/random.tr.verse");
const urRandom = require("./routes/random/random.ur.verse");
const zhRandom = require("./routes/random/random.zh.verse");

const bnSurah = require("./routes/surah/surah.bn");
const enSurah = require("./routes/surah/surah.en");
const esSurah = require("./routes/surah/surah.es");
const frSurah = require("./routes/surah/surah.fr");
const idSurah = require("./routes/surah/surah.id");
const ruSurah = require("./routes/surah/surah.ru");
const svSurah = require("./routes/surah/surah.sv");
const trSurah = require("./routes/surah/surah.tr");
const urSurah = require("./routes/surah/surah.ur");
const zhSurah = require("./routes/surah/surah.zh");

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 20, // Limit each IP to 20 requests per `window` (here, per 20 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app = express();

// middleware
app.use(limiter);
app.use(helmet());

app.use(
  cors({
    origin: "*",
    methods: "GET",
  })
);

// swagger docs
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

// routes
app.use("/", home);

app.use("/api/v1", require("./routes/random/random.verse"));
// random routes
// app.use("/api/v1/bn/random", bnRandom);
// app.use("/api/v1/en/random", enRandom);
// app.use("/api/v1/es/random", esRandom);
// app.use("/api/v1/fr/random", frRandom);
// app.use("/api/v1/id/random", idRandom);
// app.use("/api/v1/ru/random", ruRandom);
// app.use("/api/v1/sv/random", svRandom);
// app.use("/api/v1/tr/random", trRandom);
// app.use("/api/v1/ur/random", urRandom);
// app.use("/api/v1/zh/random", zhRandom);

// sura routes
// app.use("/api/v1/bn/", bnSurah);
// app.use("/api/v1/en/", enSurah);
// app.use("/api/v1/es/", esSurah);
// app.use("/api/v1/fr/", frSurah);
// app.use("/api/v1/id/", idSurah);
// app.use("/api/v1/ru/", ruSurah);
// app.use("/api/v1/sv/", svSurah);
// app.use("/api/v1/tr/", trSurah);
// app.use("/api/v1/ur/", urSurah);
// app.use("/api/v1/zh/", zhSurah);

app.use(error);

// port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`on port ${port}`);
});
