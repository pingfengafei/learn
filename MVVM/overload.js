function bindObj(obj) {
  let me = this;
 // console.log(me)
  Object.keys(obj).map(key => {
    console.log(key, obj[key])
    Object.defineProperty(me, key, {
      configurable: true,
     // writable: false,
      value: obj[key]
    });
  });
}

bindObj({
  aaaa: 1111,
  bbbb: 2222,
  cccc: 3333,
  aaaa: 4444
});

console.log(this)

console.log(this.aaaa)
