import * as webpack from 'webpack';
import * as glob from 'glob';
import * as path from 'path';

const config = {
  entry: [...glob.sync(path.join(__dirname, 'test/shared/**/*.ts')), ...glob.sync(path.join(__dirname, 'test/browser/**/*.ts'))],
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname
  },
  output: {
    filename: 'testBundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /(node_modules)/,
        options: { configFile: "tsconfig.webpack.json" }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  externals: {
    "ms-rest-js": "msRest"
  },
  node: {
    fs: false,
    net: false,
    path: false,
    dns: false,
    tls: false,
    tty: false,
    v8: false,
    Buffer: true // TODO: find alternative to Buffer for tests
  }
};

export = config;