const { range } = require('rxjs');
const { tap, finalize } = require('rxjs/operators');

range(1, 3)
    .pipe(
        tap(x => x === 3 && x.test()),
        finalize(() => console.log('FINALLY CALLBACK'))
    )
    .subscribe(
        x => console.log(`result: ${x}`),
        err => console.error(`ERROR: ${err}`)
    );
