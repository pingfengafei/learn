const {interval} = require('rxjs')
const {take} = require('rxjs/operators')


/**
 {
   const observable = interval(1000)
   const subscription = observable.subscribe(x => console.log(x))
 }
 **/

{
  interval(1000).pipe(take(10)).subscribe(x=>console.log(x))
}
