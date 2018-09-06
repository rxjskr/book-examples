const { timer, forkJoin } = require('rxjs');
const { take, map } = require('rxjs/operators');
const req1$ = timer(0, 2000).pipe(
    take(2),
    map(value => `req1 result: ${value}`)
);
const req2$ = timer(0, 1000).pipe(
    take(2),
    map(value => `req2 result: ${value}`)
);
const req3$ = timer(0, 1500).pipe(
    take(2),
    map(value => `req3 result: ${value}`)
);

console.time('forkJoin example time');

forkJoin(req1$, req2$, req3$).subscribe(result => {
    console.timeEnd('forkJoin example time');
    console.log(`== forkJoin req1$, req2$, req3$ result == `);
    console.log(`result: ${result}`);
    console.log(`result is array: ${Array.isArray(result)}`);
    Array.isArray(result) && console.log(`result length: ${result.length}`);
});
