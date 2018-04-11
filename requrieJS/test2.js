/**
 * Created by luo_f on 2017/5/25.
 */

function a (){
  console.log(arguments[0], arguments[1], arguments[2]);
}

a = a.bind(null, 1);
a(2,3)
