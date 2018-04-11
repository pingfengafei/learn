/**
 * Created by luo_f on 2017/5/18.
 */

//todo 调查view
let book = (req, res, next) => {
  if (/react/.test(req.url)) {
    console.log('goto react')
    res.render('book', {bookName: 'hello react'})
  } else if (/vue/.test(req.url)) {
    console.log('goto vue')
    res.render('book', {bookName: 'hello vue'})
  }
}

module.exports = book