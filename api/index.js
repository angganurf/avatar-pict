require("dotenv").config();
require("app-module-path").addPath(__dirname);
const serverless = require("serverless-http");
const App = require("../dist/app").default;

const app = new App();

module.exports = app;
module.exports.handler = serverless(app);
