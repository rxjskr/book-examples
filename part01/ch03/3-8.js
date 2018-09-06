const { from } = require('rxjs');
from('Hello').subscribe(
    x => console.log(`next: ${x}`),
    null,
    () => console.log('completed'));
