/**
 * Created by luo_f on 2017/6/6.
 */
var express = require('express')
var React = require('react')
var ReactDomServer = require('react-dom/server')
var DOM = require('react-dom-factories')

var app = express()
var App = require('./App')

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')

app.get('/', function (req, res) {
  var html = ReactDomServer.renderToString(
    DOM.body(null,
      DOM.div({
        id: 'root',
        dangerouslySetInnerHTML: {
          __html: ReactDomServer.renderToString(App())
        }
      })
    )
  )
  res.end(html)
})

// app.get('/', function(req, res){
//   console.log('get')
//   res.end('hello world')
// })

app.listen(3000, function () {
  console.log('running on port ' + 3000)
})


