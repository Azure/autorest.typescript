// This is a template webpack config file with minimal configuration.
// Users are free to create their own webpack configuration files in their application.
const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: 'production',
  entry: './2018-02-01/lib/autoRestParameterizedCustomHostTestClient.ts',
  devtool: 'source-map',
  output: {
    filename: 'autoRestParameterizedCustomHostTestClientBundle.js',
    path: __dirname,
    libraryTarget: 'var',
    library: 'autoRestParameterizedCustomHostTestClient'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: path.join(__dirname, '2018-02-01/tsconfig.esm.json'),
        }
      }
    ]
  },
  // "ms-rest-js" and "ms-rest-azure-js" are dependencies of this library.
  // Customer is expected to import/include this library in browser javascript
  // (probably using the script tag in their html file).
  externals: {
    "ms-rest-js": "msRest",
    "ms-rest-azure-js": "msRestAzure"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};

module.exports = config;
