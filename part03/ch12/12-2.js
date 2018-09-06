const { interval, Subject } = require('rxjs');
const { take, tap } = require('rxjs/operators');

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
const observerC = {
    next: x => console.log(`observerC: ${x}`),
    error: e => console.error(`observerC: ${e}`),
    complete: () => console.log('observerC: complete')
};

function createHotObservable(sourceObservable, subject) {
    return {
        connect: () => sourceObservable.subscribe(subject),
        subscribe: subject.subscribe.bind(subject)
    };
}
const sourceObservable$ = interval(500).pipe(
    take(5),
    tap(x => console.log(`tap ${x}`))
);
const hotObservableExample = createHotObservable(
    sourceObservable$,
    new Subject()
);

hotObservableExample.subscribe(observerA);
console.log('observerA subscribe');
hotObservableExample.subscribe(observerB);
console.log('observerB subscribe');

hotObservableExample.connect();
console.log('connect called');

setTimeout(() => {
    console.log('1000ms..');
    hotObservableExample.subscribe(observerC);
    console.log('observerC subscribe');
}, 1000);
