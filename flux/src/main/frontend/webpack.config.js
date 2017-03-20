'use strict';
let path = require('path');

let port = 8080;
let srcPath = path.join(__dirname, '/../src');
let publicPath = '/assets/';
let webpack = require('webpack');

module.exports = {
  entry: [
    './src/entry-point.js'
  ],
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether"
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true,
        sequences: true,
        booleans: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  output: {
    path: '../../../target/classes/static/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        use: 'eslint-loader'
      },

      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: 'imports-loader?jQuery=jquery'
      },
      {
        test: /\.sass/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            query: {
              outputStyle: 'expanded',
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.less/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: '8192'
          }
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: '10000',
            minetype : 'application/font-woff'
          }
        }
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
          query: {
            name: '[path][name].[ext]'
          }
        }
      }
    ]
  }
};
