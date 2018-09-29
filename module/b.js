import {foo} from './a'; // (3)

foo()

export function bar() {
  if (Math.random()) {
    foo(); // (4)
  }
}