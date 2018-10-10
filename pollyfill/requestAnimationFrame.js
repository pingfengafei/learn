let lastTimestamp = 0; //init 0
let requestAnimationFrame = callback => {
  let curTimestamp = +new Date();
  let timeToCall = Math.max(0, 16 - (curTimestamp - lastTimestamp)); //保证首次'立刻执行'，以后不超过16ms执行一次
  let id = setTimeout(callback, timeToCall);
  lastTimestamp = curTimestamp + timeToCall;

   let cancelAnimationFrame = () => {
    clearTimeout(id);
  };
};

let lastRenderTimeStamp = +new Date();
function foo() {
  let curTimestamp = +new Date();
  console.log(curTimestamp - lastRenderTimeStamp);
  lastRenderTimeStamp = curTimestamp;

  requestAnimationFrame(foo);
}