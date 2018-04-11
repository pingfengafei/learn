//nicccccccce function

//from https://github.com/yangzj1992/FE-Questions/blob/master/codewars/54c27ef1fb7da0118600046a.Born%20to%20be%20chained/Born%20to%20be%20chained.md
function chain (fns) {
  function ChainWraper (x) {
    this._ = x
  }

  Object.keys(fns).forEach((key) => {
    ChainWraper.prototype[key] = function () { //每个都是新函数
      let args = [].slice.call(arguments)
      if (this._) {
        args.unshift(this._)
      }

      let x = fns[key].apply(null, args)

      return new ChainWraper(x) //每次返回new ChainWrapper

    }
  })

  ChainWraper.prototype.execute = function () {
    return this._
  }

  return new ChainWraper()
}