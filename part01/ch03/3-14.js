const { timer } = require('rxjs');
timer(1000)
    .subscribe(
        x => console.log(`timer(1000) next: ${x}`),
        err => console.error(`error.message: ${err.message}`),
        () => console.log('completed')
    );

