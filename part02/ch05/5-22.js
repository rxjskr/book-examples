const { interval } = require('rxjs');
const { take, scan, pluck } = require('rxjs/operators');
const n = 7;
const source$ = interval(500).pipe(
    take(n),
    scan(
        (accumulation, currentValue) => ({
            a: accumulation.b,
            b: accumulation.a + accumulation.b
        }),
        { a: 1, b: 0 }
    ),
    pluck('a')
);
source$.subscribe(result => console.log(`result1 ${result}`));
setTimeout(
    () =>
        source$.subscribe(result => console.log(`result2 ${result}`)),
    3100
);
