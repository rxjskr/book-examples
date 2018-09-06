const { throwError } = require('rxjs');
throwError(new Error('throw error'))
    .subscribe(
        x => console.log(`throw(err) next: ${x}`),
        err => console.error(`throw(err) error.message: ${err.message}`),
        () => console.log('completed')
    );

