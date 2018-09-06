const { range } = require('rxjs');
range(1, 5)
    .subscribe(
        x => console.log(`range(1, 5) next: ${x}`),
        err => console.error(`error.message: ${err.message}`),
        () => console.log('completed')
    );

range(2, 5)
    .subscribe(
        x => console.log(`range(2, 5) next: ${x}`),
        err => console.error(`error.message: ${err.message}`),
        () => console.log('completed')
    );

