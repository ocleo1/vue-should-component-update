const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const env = process.env.NODE_ENV;

let config = {
  mode: env,
  entry: "./src/vue/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "vue-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

if (env === 'development') {
  config.devtool = "source-map";
}

module.exports = config;
