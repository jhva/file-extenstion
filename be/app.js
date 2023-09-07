const notFoundMiddleware = require("./middlewares/NotFoundMiddleWare");

const { corsMiddleware } = require("./config/cors");

const rootRouter = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const port = 3030;

const app = express();

require("dotenv").config();
require("./config/database");

app.use(corsMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/", rootRouter);
app.use(notFoundMiddleware);

app.listen(port, () => {
  console.log(`🚀server starting ${port}`);
});
