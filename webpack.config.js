const path = require("path");

module.exports = {
   entry: "./index.js",
   output: {
      filename: "bundle.js",
   path: path.join(__dirname, "application", "javascript")
   },
   devtool: 'source-map',
};