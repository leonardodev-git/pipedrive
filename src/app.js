const express = require("express");
const bodyParser = require("body-parser");
const lib = require("pipedrive");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to the database"))

const routes = require("./routes/routes");

app.use(bodyParser.json());
app.use(cors());

lib.Configuration.apiToken = `${process.env.PIPEDRIVE_TOKEN}`;

app.use("/orders", routes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.listen(process.env.PORT);
