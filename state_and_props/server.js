/*eslint no-console:0 */
require('core-js/fn/object/assign');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var open = require('open');

new WebpackDevServer(webpack(config), config.devServer)
  .listen(config.devServer.port, 'localhost', function(err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + config.devServer.port);
    console.log('Opening your system browser...');
    open('http://localhost:' + config.devServer.port + '/webpack-dev-server/');
  });
