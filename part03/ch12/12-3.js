const { interval, Subject } = require('rxjs');
const { take, multicast } = require('rxjs/operators');
const sourceObservable$ = interval(500).pipe(take(5));
const multi = sourceObservable$.pipe(multicast(() => new Subject()));

// 첫 번째 인자로 제공한 팩토리 함수에서 리턴한 서브젝트를 구독하는 부분 
const subscriberOne = multi.subscribe(val => console.log(val));
const subscriberTwo = multi.subscribe(val => console.log(val));

// 소스 옵저버블이 서브젝트를 구독하는 부분
multi.connect();