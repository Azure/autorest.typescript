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
//[
//   "/workspaces/autorest.typescript/test-browser/integration/additionalProperties.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/appConfiguration.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/appConfigurationExport.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/azureParameterGrouping.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/azureSpecialProperties.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyArray.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyBoolean.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyBooleanQuirks.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyByte.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyComplex.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyDate.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyDateTime.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyDateTimeRfc1123.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyDictionary.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyDuration.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyFile.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyFormData.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyInteger.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyNumber.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyString.spec.js",
//   "/workspaces/autorest.typescript/test-browser/integration/bodyTime.spec.js"
// ];

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
