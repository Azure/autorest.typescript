const { readdirSync, statSync } = require("fs");
const { join: joinPath, sep, extname } = require("path");
const webpack = require("webpack");

function getIntegrationTestFiles(env) {
  const mode = env.mode ?? "hlc";
  const dirPath = joinPath(
    __dirname,
    "test-browser",
    mode === "hlc" ? "integration" : "rlcIntegration"
  );
  let files = readdirSync(dirPath);
  files = files
    .filter(
      (name) =>
        extname(name) === ".js" && statSync(`${dirPath}${sep}${name}`).isFile()
    )
    .map((filename) => `${dirPath}${sep}${filename}`);

  return [...files];
}
module.exports = (env) => ({
  target: "web",
  entry: getIntegrationTestFiles(env),
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
  devtool: "inline-source-map",
  resolve: {
    fallback: {
      buffer: require.resolve("buffer/")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"]
    })
  ]
});
