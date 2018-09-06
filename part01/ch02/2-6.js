const { interval } = require('rxjs');
const observable = interval(1000);

// 옵저버와 함께 subscribe 함수를 호출해 옵저버블 실행
const subscription = observable.subscribe(function (x) {
    console.log(x);
});

// unsubscribe 함수로 구독 해제(바로 해제됨)
subscription.unsubscribe();


