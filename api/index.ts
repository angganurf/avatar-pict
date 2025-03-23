require("dotenv").config();
require("app-module-path").addPath(__dirname);
// const serverless = require("serverless-http");
const express = require("express");
const App = require("../dist/app").default;

const app = new App();

// app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
module.exports.handler = express(app);
