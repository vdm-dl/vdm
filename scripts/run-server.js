const path = require("path");
require("ts-node/register");
require(path.resolve(__dirname, "../packages/server/src/index.ts"));
console.log("run-server.js finished requiring server");
