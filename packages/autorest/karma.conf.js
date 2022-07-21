// https://github.com/karma-runner/karma-chrome-launcher
process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "./",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha", "source-map-support"],

    plugins: [
      "karma-mocha",
      "karma-chrome-launcher",
      "karma-source-map-support"
    ],

    // Files that should be loaded in the browser.
    files: ["test-browser/index.js"],
    exclude: [],
    reporters: ["progress"],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true, // Set to false when you need to debug.

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
        // base: "Chrome", // Use Chrome when you need to debug.
        flags: [
          "--disable-web-security", // disable cors
          "--disk-cache-dir",
          "null" // disable browser caching (note: If in regular Chrome, go to Devtools -> Network -> Disable Cache)
        ]
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
