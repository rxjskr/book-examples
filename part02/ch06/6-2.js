const { timer, merge } = require('rxjs');
const { map, take } = require('rxjs/operators');
const req1$ = timer(0, 200)
    .pipe(map(value => `req1: ${value}`), take(6));
const req2$ = timer(0, 500)
    .pipe(map(value => `req2: ${value}`), take(11));
const req3$ = timer(0, 300)
    .pipe(map(value => `req3: ${value}`), take(7));
const req4$ = timer(0, 500)
    .pipe(map(value => `req4: ${value}`), take(9));
const req5$ = timer(0, 100)
    .pipe(map(value => `req5: ${value}`), take(8));
const req6$ = timer(0, 700)
    .pipe(map(value => `req6: ${value}`), take(4));
const concurrent = 2;

merge(req1$, req2$, req3$, req4$, req5$, req6$, concurrent)
    .subscribe(req => console.log(`response from ${req}`));