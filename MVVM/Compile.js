/**
 * Created by luo_f on 2017/9/20.
 */
//一个mini 模板引擎

/**
 * 一个mimi模板引擎
 * 触发订阅者模式时，调用Compile
 *
 */

function Compile(el, vm) {
  //options.el, this
  this.$vm = vm;
  this.$el = this.isElementNode(el) ? el : document.querySelector(el); //类jQuery的属性查询器, 返回dom节点

  //将新的UI添加到对当前的element Node节点上
  if (this.$el) {
    this.$fragment = this.createFragment(this.$el);
    this.init(); //int whatFFF
    this.$el.appendChild(this.$fragment); //将内存dom渲染到页面上
  }
}

//这里有很多有趣的未知知识

Compile.prototype = {
  //创建一个虚拟的内存dom节点
  createFragment: el => {
    let fragment = document.createDocumentFragment(), //创建一个空的document对象引用
      child;
    while ((child = el.firstChild)) {
      //这段话做什么什么呢？
      fragment.appendChild(child);
    }

    return fragment;
  },

  init: function() {
    this.compileElement(this.$fragment)
  },

  //编译element 干什么呢
  compileElement : function(el){
    let childNodes = el.childNodes, //el的一级子所有node
    me = this
    
    [].prototype.slice.call(childNodes).forEach((node)=>{
      let textContent = node.textContent //所有的文本内容
      let reg = /\{\{(.*)\}\}/ //处理{{}}
      
      if(me.isElementNode(node)){
        me.compile(node)
      }else if(me.isTextNode && reg.test(textContent)){
        me.compileText(node, RegExp.$1) //替换模式
      }

      if(node.childNodes &&node.childNodes.length){
        me.compileElement(node) //递归
      }
    })
  },

  compile(node){

  },

  compileText(node, exp){

  },


  isElementNode: node => {
    //div, p input etc
    return node.nodeType === 1;
  },

  isDirective: attr => {
    //v-model v-aaaa etc
    return attr.indexOf("v-") === 0;
  },

  isEventDirective: dir => {
    //why dir
    return dir.indexOf("on") === 0;
  },

  isTextNode: node => {
    return node.nodeType === 3;
  }
};

//指令集合
var compileUtil = {
  text : function(node, vm, exp){  //node this expression
    this.bind(node, vm, exp, 'text') //what the fucck ??? 可怜的bind
  },

  bind: (node, vm, exp, type)=>{ //why type is dir??
    let updaterFn = updater[type + 'Updater']
    updaterFn && updaterFn(node, this._getVMVal(vm, exp)) //??

    new Watcher(vm, exp, (value, oldValue)=>{
      updaterFn && updaterFn(node, value, oldValue)
    })
  }
};

var updater = {

};

