const { interval, Subject } = require('rxjs');
const { take } = require('rxjs/operators');

const intervalSource$ = interval(500).pipe(take(5));
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

const subject = new Subject();
subject.subscribe(observerA);

// 수정 코드 => 한 줄로 간결해짐
intervalSource$.subscribe(subject);

// 수정 코드 => 한 줄로 간결해짐
setTimeout(() => subject.subscribe(observerB), 2000);