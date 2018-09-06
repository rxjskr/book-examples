const { concat, range } = require('rxjs');
const { tap } = require('rxjs/operators');

concat(
    range(1, 4).pipe(
        tap(
            x => console.log(`tap next: ${x} STREAM 1`),
            err => console.error(`tap ERROR: ${err} STREAM 1`),
            () => console.log('complete STREAM 1')
        )
    ),
    range(5, 3).pipe(
        tap(
            x => console.log(`tap next: ${x} STREAM 2`),
            err => console.error(`tap ERROR: ${err} STREAM 2`),
            () => console.log('complete STREAM 2')
        )
    )
).subscribe(
    x => console.log(`   result ${x}`),
    err => console.error(`   subscribe ERROR: ${err}`),
    () => console.log('   subscribe complete')
);
