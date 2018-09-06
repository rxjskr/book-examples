const { of } = require('rxjs');
const { distinctUntilChanged } = require('rxjs/operators');

of(
    { a: 1, b: 20 },
    { a: 1, b: 20 },
    { a: 2, b: 40 },
    { a: 3, b: 70 },
    { a: 3, b: 70 },
    { a: 2, b: 40 }
)
    .pipe(distinctUntilChanged((o1, o2) => o1.a === o2.a && o1.b === o2.b))
    .subscribe(x => console.log(JSON.stringify(x)));

