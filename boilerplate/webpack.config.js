'use strict';
let path = require('path');

let port = 8080;
let srcPath = path.join(__dirname, '/../src');
let publicPath = '/assets/';
let webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React
    'webpack-dev-server/client?http://127.0.0.1:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    './src/main.js'
    // the entry point of our app
  ],
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  output: {
    path: path.join(__dirname, '/dist/assets'),
    filename: 'app.js',
    publicPath: publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: false,
    port: port,
    publicPath: publicPath
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
