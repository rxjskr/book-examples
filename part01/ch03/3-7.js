const { from } = require('rxjs');
function* forLoopGen(start, end, increment) {
    for(let x = start; x <= end; x += increment) {
        yield x;
    }
}

from(forLoopGen(1, 15, 2))
    .subscribe(
        x => console.log(`next: ${x}`),
        null,
        () => console.log('completed')
    );

