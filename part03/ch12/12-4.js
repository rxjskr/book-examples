const { interval, Subject } = require('rxjs');
const { take, multicast } = require('rxjs/operators');
const subject = new Subject();
const sourceObservable$ = interval(500).pipe(take(5));
const multi = sourceObservable$.pipe(multicast(() => subject));
// 아래 코드를 사용해도 괜찮음
// const multi = sourceObservable$.pipe(multicast(subject));

const subscriberOne = multi.subscribe(val => console.log(val));
const subscriberTwo = multi.subscribe(val => console.log(val));

subject.next(1);