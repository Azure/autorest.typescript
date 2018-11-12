import * as webpack from 'webpack';
import * as glob from 'glob';
import * as path from 'path';
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config: webpack.Configuration = {
  entry: glob.sync('test/*/*.ts', { absolute: true }),
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: 'testBundle.js',
    path: __dirname
  },
  plugins: process.env.CI ? [] : [
    new ForkTsCheckerWebpackPlugin()
  ],
  devServer: {
    contentBase: './'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          // speed up build times and get type checking through the forked checker plugin
          transpileOnly: !process.env.CI
        }
      }
    ]
  },
  // TODO: setup which ensures that the bundle we ship out of ms-rest[-azure]-js works in the browser
  // Downside: more individual watches are required to make this responsive to your edits
  // externals: {
  //   "@azure/ms-rest-js": "msRest",
  //   "@azure/ms-rest-azure-js": "msRestAzure"
  // },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "moment": path.resolve('./node_modules/moment/min/moment.min.js')
    }
  },
  node: {
    fs: "empty",
    net: false,
    path: false,
    dns: false,
    tls: false,
    tty: false,
    v8: false,
    Buffer: false,
    process: true
  }
};

export = config;