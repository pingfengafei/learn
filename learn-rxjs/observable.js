const {Observable, from} = require('rxjs')

{
  const observable = Observable.create((observer) => {

    console.log(observer)
    console.log(observer.next)

    observer.next(1)
    observer.next(2)
    observer.next(3)

    setTimeout(() => {
      observer.next(4)
      observer.complete()
    }, 1000)
  })

  console.log('start subscribe')

  observable.subscribe(i => console.log(i)
  )

  console.log('end subscribe')
}

{
  const observable = Observable.create((observer) => {
    console.log('hello rxjs')
    observer.next(1111)
  })

  observable.subscribe((x) => {console.log(x)})
  observable.subscribe((x) => {console.log(x)})
}

{
  const observable = from([10, 20, 30])
  const subscription = observable.subscribe(i => console.log(i))

  subscription.unsubscribe()

}

{
  const observable = Observable.create((observer)=>{
    observer.next(10)
    observer.next(20)
    observer.next(30)

    setTimeout(()=>{
      observer.next(40)
    }, 3000)
  })


  const subscription = observable.subscribe(i=> console.log(i))
  subscription.unsubscribe()
}