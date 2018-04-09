import * as webpack from 'webpack';
import * as glob from 'glob';
import * as path from 'path';

const config: webpack.Configuration = {
  entry: glob.sync('test/*/*.ts', { absolute: true }),
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: 'testBundle.js',
    path: __dirname
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  devServer: {
    contentBase: './'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /(node_modules)|(startServer\.ts)/
      }
    ]
  },
  // TODO: setup which ensures that the bundle we ship out of ms-rest[-azure]-js works in the browser
  // Downside: more individual watches are required to make this responsive to your edits
  // externals: {
  //   "ms-rest-js": "msRest",
  //   "ms-rest-azure-js": "msRestAzure"
  // },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "moment": path.resolve('./node_modules/moment/min/moment.min.js')
    }
  },
  node: {
    fs: false,
    net: false,
    path: false,
    dns: false,
    tls: false,
    tty: false,
    v8: false,
    Buffer: true,
    process: true
  }
};

export default config;