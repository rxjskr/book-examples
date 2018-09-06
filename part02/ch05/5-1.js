const { from } = require('rxjs');
const { map } = require('rxjs/operators');

const source$ = from([1, 2, 3, 4, 5]);
const resultSource$ = source$.pipe(
    map(x => x + 1),
    map(x => x * 2)
);

resultSource$.subscribe(x => console.log(x));
