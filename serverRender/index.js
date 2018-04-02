/**
 * Created by luo_f on 2017/6/6.
 */
var express = require('express')
var React = require('react')
var ReactDomServer = require('react-dom/server')
var DOM = require('react-dom-factories')

var app = express()
var App = require('./views/App')


console.log('__dirname', __dirname)

app.set('views', __dirname + '/views')
app.set('view engine', 'js')
app.engine('js', require('express-react-views').createEngine())
// var options = { beautify: true }
// app.engine('js', require('express-react-views').createEngine(options))

app.get('/', function (req, res) {
  // let html = ReactDomServer.renderToString(
  //   DOM.body(null,
  //     DOM.div({
  //       id: 'root',
  //       dangerouslySetInnerHTML: {
  //         __html: ReactDomServer.renderToString(App())
  //       }
  //     })
  //   )
  // )

  res.render(App)
})

// app.get('/', function(req, res){
//   console.log('get')
//   res.end('hello world')
// })

app.listen(3000, function () {
  console.log('running on port ' + 3000)
})

var datetimedesc= datetime.getMonth() + 1 + "月"
                  + datetime.getDate() + "日"
                  + " "
                  + (datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours())
                  + ":"
                  + (datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes())
                  + ':'
                  + (datetime.getSeconds() >=10 ? datetime.getSeconds() : ('0' + datetime.getSeconds()))



