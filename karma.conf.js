// https://github.com/karma-runner/karma-chrome-launcher
process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "./",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha", "karma-typescript"],

    plugins: [
      "karma-mocha",
      "karma-mocha-reporter",
      "karma-typescript",
      "karma-chrome-launcher"
    ],
    preprocessors: {
      "test/integration/*.spec.ts": "karma-typescript",
      "test/integration/generated/**/*.ts": "karma-typescript"
    },
    files: [
      //"test/integration/generated/**/*.spec.ts",
      "test/integration/**/*.ts"
    ],
    exclude: [
      "test/integration/bodyFile.spec.ts", // node.js specific test
      "**/*.d.ts",
      "test/testserver-v1/*.ts"
    ],
    reporters: ["progress", "karma-typescript"],

    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.browser-test.json",
      bundlerOptions: {
        entryPoints: /test\/integration\/[\w\d]+\.spec\.ts$/,
        addNodeGlobals: false,
        transforms: [require("karma-typescript-es6-transform")()],
        constants: {
          process: {
            env: {}
          }
        }
      }
    },

    // web server port
    //port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 1,

    browserNoActivityTimeout: 600000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 3,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // 'ChromeHeadless', 'Chrome', 'Firefox', 'Edge', 'IE'
    customLaunchers: {
      chrome_no_cors: {
        base: "ChromeHeadless",
        flags: ["--disable-web-security"]
      }
    },
    browsers: ["chrome_no_cors"],

    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: "html",
        timeout: "600000"
      }
    }
  });
};
