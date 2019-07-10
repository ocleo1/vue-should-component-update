const path = require('path');

const env = process.env.NODE_ENV;

let config = {
  mode: env,
  entry: "./src/react/Main",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "react-bundle.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};

if (env === 'development') {
  config.devtool = "source-map";
}

module.exports = config;
