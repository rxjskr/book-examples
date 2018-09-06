const { interval } = require('rxjs');
const { take, scan, pluck } = require('rxjs/operators');
const n = 7;

const source$ = interval(500).pipe(
    take(n),
    scan(
        (accumulation, currentValue) => {
            const tempA = accumulation.a;
            accumulation.a = accumulation.b;
            accumulation.b = tempA + accumulation.b;
            return accumulation;
        },
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
