const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
      },
      plugins: [
          new webpack.ProvidePlugin({
              $: "jquery",
              JQuery: "jquery"
          }),
      ],
      devtool: "eval-cheap-source-map",

      mode: 'development'
};

