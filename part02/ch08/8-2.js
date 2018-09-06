const { range } = require('rxjs');
const { map, tap } = require('rxjs/operators');

range(1, 8)
    .pipe(
        map(x => (x === 8 ? x.test() : x + 1)),
        tap(
            x => console.log(`tap next: ${x}`),
            err => console.error(`tap ERROR: ${err}`)
        )
    )
    .subscribe(
        x => console.log(`result ${x}`),
        err => console.error(`subscribe ERROR: ${err}`)
    );
