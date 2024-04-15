const { readdirSync, statSync } = require("fs");
const { join: joinPath, sep, extname } = require("path");
const webpack = require("webpack");
const { spawn } = require("child_process");

function getIntegrationTestFiles(env) {
  const mode = env.mode ?? "hlc";
  if (mode === "rlc") {
    copyPackageJson();
    installDependencies();
  } else {
    removeDependencies();
  }
  const dirPath = joinPath(
    __dirname,
    "test-browser",
    mode === "rlc" ? rlcIntegration : integration
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

async function removeDependencies() {
  const packageJson = joinPath(__dirname, "test-browser", "package.json");
  const nodeModules = joinPath(__dirname, "test-browser", "node_modules");
  const rmCommand = `rm -rf`;
  const rm = spawn(rmCommand, [packageJson, nodeModules], {
    stdio: [process.stdin, process.stdout, process.stderr]
  });
  rm.on("error", (err) => {
    console.error("Failed to install dependencies", err);
  });
}

async function copyPackageJson() {
  const srcPath = joinPath(
    __dirname,
    "test",
    "commands",
    "browser.package.json"
  );
  const destPath = joinPath(__dirname, "test-browser", "package.json");
  const cpCommand = `cp`;
  const cp = spawn(cpCommand, [srcPath, destPath], {
    stdio: [process.stdin, process.stdout, process.stderr]
  });
  cp.on("error", (err) => {
    console.error("Failed to install dependencies", err);
  });
}

async function installDependencies() {
  let path = joinPath(__dirname, "test-browser");
  const npmCommand = `npm${/^win/.test(process.platform) ? ".cmd" : ""}`;
  const npmInstall = spawn(npmCommand, ["install"], {
    stdio: [process.stdin, process.stdout, process.stderr],
    cwd: path
  });
  npmInstall.on("error", (err) => {
    console.error("Failed to install dependencies", err);
  });
}

// const entry = getIntegrationTestFiles();

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
