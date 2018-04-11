/**
 * Created by luo_f on 2017/5/24.
 */


/**
 * 按照文档说法，reqire.config需要配置在模块定义文件的最上面
 * 那么我们是否可以这么做：
 * 1. 引入require.JS
 * 2. 定义一个根index.js
 * 3. 将全局require.config 配置到index.js
 * 4. 其他模块定义前自己配置局部的require.js
 *
 */

require.config({
  baseUrl : 'js/module', //js目录
  paths : {
    math : 'add'
  }
})

require(['math'], (math)=>{
  console.log(math.add(1,2))
})




