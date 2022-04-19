const { readdirSync, statSync } = require("fs");
const webpack = require("webpack");
const { join: joinPath, sep, extname } = require("path");

function getIntegrationTestFiles() {
  const dirPath = joinPath(__dirname, "test-browser", "integration");
  const files = readdirSync(dirPath);
  return files
    .filter(
      name =>
        extname(name) === ".js" && statSync(`${dirPath}${sep}${name}`).isFile()
    )
    .map(filename => `${dirPath}${sep}${filename}`);
}

const entry = getIntegrationTestFiles();

module.exports = {
  entry,
  output: {
    filename: "index.js",
    path: joinPath(__dirname, "test-browser")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"]
      }
    ]
  },
  mode: "development",
  devtool: "inline-source-map",
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
      buffer: require.resolve("buffer")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"]
    }),
    new webpack.ProvidePlugin({
      process: "process/browser"
    })
  ]
};
