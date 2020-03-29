const express = require("express");
const { errors } = require("celebrate");
const cors = require("cors");
const routes = require("./routes");

const app = express();

//informando ao express que utilizaremos de JSON para corpo das requisições
app
  .use(cors())
  .use(express.json())
  .use(routes)
  .use(errors());

module.exports = app;
