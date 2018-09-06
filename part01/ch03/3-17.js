const { NEVER } = require('rxjs');
console.log('before subscribe()');
NEVER.subscribe(
    x => console.log(`NEVER next: ${x}`),
    err => console.error(`error.message: ${err.message}`),
    () => console.log('completed')
);
console.log('after subscribe()');

