/**
 * Created by luo_f on 2017/5/10.
 */

module.exports =   {
  sayHello(){
    console.log('hello', this)
  },
  sayThat: () => {
    console.log('that', this)
  }
}