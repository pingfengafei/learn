/**
 * Created by luo_f on 2017/11/29.
 */
var a = {
  sayHi : function(){
    console.log(this)
  },

  sayThis : ()=>{
    console.log(this)
  }
}

a.sayHi()
a.sayThis()