// #!/usr/bin/env node#!/usr/bin/env node

// var queryString = require('querystring')
var spawn = require('cross-spawn') //按顺序执行node命令

console.log(process.argv)

const args = process.argv.slice(2)
const scriptIndex = args.findIndex(x => x === 'build' || x === 'start' || x === 'test' || x === 'eject')

const script = scriptIndex === -1 ? args[0] : args[scriptIndex]
const nodeArgs = scriptIndex === -1 ? [] : args.slice(0, scriptIndex)

switch(script){
  case 'build': //无break，穿透
  case 'eject':
  case 'start':
  case 'test':
    //很复杂的一个数组
   const result =  spawn.sync(
      'node',
      [].concat(nodeArgs).concat(require.resolve(`../scripts/${script}`)).concat(args.slice(scriptIndex + 1)), //第三个concat是下一个命令
      {
        stdio:
          'inherit'
      }
    )
    if(result.signal){
      if (result.signal === 'SIGKILL') {
        console.log(
          'The build failed because the process exited too early. ' +
          'This probably means the system ran out of memory or someone called ' +
          '`kill -9` on the process.'
        );
      } else if (result.signal === 'SIGTERM') {
        console.log(
          'The build failed because the process exited too early. ' +
          'Someone might have called `kill` or `killall`, or the system could ' +
          'be shutting down.'
        );
      }
      process.exit(1)
    }
    process.exit(result.status)
    break;
  default:
    console.log(`Unknown script ${script}`)
}
