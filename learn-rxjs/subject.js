/**
 * Subject：一类特殊的Observable，可以广播给多个Observer
 * Observable是单播的
 *
 * 同时，Subject也是一个Observer
 */

const {Subject, from} = require('rxjs')

/**
{
  const subject = new Subject()

  subject.subscribe(i => console.log(i))
  subject.subscribe(i => console.log(i))

  subject.next(1)
  subject.next(2)
}
**/

// {
//   //Subject也是一个Observer
//   const subject = new Subject()
//
//   subject.subscribe(i=> console.log(i))
//
//   const observable = from([1,2,3])
//
//   observable.subscribe(subject)
// }

{

  const { Observable, Subject, ReplaySubject, from, of, range } = require('rxjs');
  const { map, filter, switchMap } = require('rxjs/operators');

  range(1, 200)
  .pipe(filter(x => x % 2 === 1), map(x => x + x))
  .subscribe(x => console.log(x));

}