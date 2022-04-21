const { readdirSync, statSync } = require("fs");
const { join: joinPath, sep, extname } = require("path");

function getIntegrationTestFiles() {
  let hlcDirPath = joinPath(__dirname, "test-browser", "integration");
  let hlcFiles = readdirSync(hlcDirPath);
  let rlcDirPath = joinPath(__dirname, "test-browser", "rlcIntegration");
  let rlcFiles = readdirSync(rlcDirPath);
  hlcFiles = hlcFiles
    .filter(
      name =>
        extname(name) === ".js" &&
        statSync(`${hlcDirPath}${sep}${name}`).isFile()
    )
    .map(filename => `${hlcDirPath}${sep}${filename}`);

  rlcFiles = rlcFiles
    .filter(
      name =>
        extname(name) === ".js" &&
        statSync(`${rlcDirPath}${sep}${name}`).isFile()
    )
    .map(filename => `${rlcDirPath}${sep}${filename}`);

  return [...hlcFiles, ...rlcFiles];
}

const entry = getIntegrationTestFiles();

module.exports = {
  target: "web",
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
  ignoreWarnings: [
    {
      module: /opentelemetry/
    },
    {
      module: /core-asynciterator-polyfill/
    }
  ],
  mode: "development",
  devtool: "inline-source-map"
};
