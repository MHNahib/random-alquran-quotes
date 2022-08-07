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

app.use("/api/v1", require("./routes/index"));

app.use(error);

// port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`on port ${port}`);
});
