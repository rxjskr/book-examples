const { BehaviorSubject, interval } = require('rxjs');
const { take, map } = require('rxjs/operators');

const observerA = {
    next: x => console.log(`observerA: ${x}`),
    error: e => console.error(`observerA: ${e}`),
    complete: () => console.log('observerA: complete')
};
const observerB = {
    next: x => console.log(`observerB: ${x}`),
    error: e => console.error(`observerB: ${e}`),
    complete: () => console.log('observerB: complete')
};
const behaviorSubject = new BehaviorSubject(0);
const incrementInterval$ = interval(1000).pipe(
    take(5),
    map(x => behaviorSubject.value + 1) // 최신 값에서 1증가시킨 값으로 변환 
);

// incrementInterval$를 behaviorSubject와 연결하여 시작
incrementInterval$.subscribe(behaviorSubject); 
// observerA바로 구독 
behaviorSubject.subscribe(observerA);
// observerB는 3초후 구독 
setTimeout(() => behaviorSubject.subscribe(observerB), 3200);

