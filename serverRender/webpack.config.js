/**
 * Created by luo_f on 2017/6/6.
 */

let path = require('path')

var assetsPath = path.join(__dirname, 'public', 'assets')
var publicPath = "assets/"
var loaders = [
  { test: /\.js$/, loader: "jsx-loader" },
  { test: /\.png$/, loader: "url-loader" },
  { test: /\.jpg$/, loader: "file-loader" },
  { test: /\.css$/, loader: "style-loader!css-loader" }
]

let clientConfig = {
  name : 'client',
  entry: './app/entry.js',
  output: {
    path: assetsPath,
    filename: 'app.[hash].js',
    publicPath: publicPath
  },
  module :{
    loaders : loaders
  }
}

let serverConfig = {
  name : 'server-side render',
  entry : './server/page.js',
  target : 'node',


}

module.exports = config