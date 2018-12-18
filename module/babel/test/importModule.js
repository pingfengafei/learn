import module, {foo, bar} from './exportModule'
console.log(module)
console.log(foo)
console.log(bar)

import * as target from './exportModule'
console.log(target)