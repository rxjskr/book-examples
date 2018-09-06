const { ReplaySubject, interval } = require('rxjs');
const { take } = require('rxjs/operators');
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

const replaySubject = new ReplaySubject();
const intervalSource$ = new interval(500).pipe(take(8));

console.log("try replaySubject.subscribe(observerA)");
replaySubject.subscribe(observerA);

console.log("try intervalSource$.subscribe(replaySubject)");
intervalSource$.subscribe(replaySubject);

setTimeout(() => {
    console.log("try replaySubject.subscribe(observerB), setTimeout 2600ms");
    replaySubject.subscribe(observerB);
}, 2600);