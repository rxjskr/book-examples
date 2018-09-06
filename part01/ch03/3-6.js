const { from } = require('rxjs');
from([1, 2, 3, 4])
    .subscribe(
        x => console.log(`next: ${x}`),
        null,
        () => console.log('completed')
    );

