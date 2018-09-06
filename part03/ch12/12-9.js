const { interval, Subject } = require('rxjs');
const { multicast, take, tap, publish } = require('rxjs/operators');

// const testSource$ = interval(500).pipe(
//     take(5),
//     tap(x => console.log(`tap ${x}`)),
//     multicast(() => new Subject())
// );
const testSource$ = interval(500).pipe(
    take(5),
    tap(x => console.log(`tap ${x}`)),
    publish()
);

const a = testSource$.subscribe(x => console.log(`a: ${x}`));
const b = testSource$.subscribe(x => console.log(`b: ${x}`));

testSource$.connect();

setTimeout(() => {
    console.log('timeout');
    a.unsubscribe();
    b.unsubscribe();
    testSource$.subscribe(x => console.log(`c: ${x}`));
    testSource$.connect();
}, 3000);
