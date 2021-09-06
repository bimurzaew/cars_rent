const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const morgan = require("morgan");
const chalk = require("chalk");
require("dotenv").config();

const app = express();


app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));
app.use(fileUpload());


app.use(require('./routes/index'))

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        chalk.bgBlue.yellow.bold(
          `server has been started on port ${process.env.PORT}`
        )
      );
      console.log(chalk.bgBlue.yellow.bold("DataBase has been connected"));
    });
  })
  .catch(() => {
    console.log(chalk.bgRed.red.bold("error"));
  });
