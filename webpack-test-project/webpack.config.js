const path = require("path");
const BundleAnalyzerPlugin = require("../lib/index").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./entry.js"),
  output: {
    filename: "./output.js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx)|(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "> 0.25%, not dead",
                },
              ],
              ["@babel/preset-react"],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 3000,
    }),
  ],
};
