const { interval } = require('rxjs');
const { map, tap } = require('rxjs/operators');
const mergeSeqTake = require('./myOperators/mergeSeqTake');

const req1$ = interval(500).pipe(
    map(value => `req1 - ${value}`),
    tap(x => console.log(`[tap] ${x}`))
);

const req2$ = interval(1000).pipe(
    map(value => `req2 - ${value}`),
    tap(x => console.log(`[tap] ${x}`))
);

const req3$ = interval(500).pipe(
    map(value => `req3 - ${value}`),
    tap(x => console.log(`[tap] ${x}`))
);

mergeSeqTake(req1$, req2$, req3$, 2).subscribe(x => console.log(x));
