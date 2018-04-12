/**
 * Created by luo_f on 2017/4/26.
 */

require(['a', 'b', 'c'], function(a, b, c){
  //异步加载完abc后，执行main内容
});

自定义模块加载
require.config({
    baseUrl: "js/lib",  //自动添加url
    paths: {
        "jquery": "jquery.min",
        "underscore": "underscore.min",
        "backbone": "backbone.min"
    }  或者直接url
});

定义一个模块 文件名叫 moduleA.js
define([其他模块依赖], function(){
  //main process

    return obj;
});
定义 define
加载 require





