const { range } = require('rxjs');
const { startWith, scan } = require('rxjs/operators');

range(4, 3)
    .pipe(
        startWith(1, 2, 3),
        scan((x, y) => x + y)
    )
    .subscribe(sum => console.log(`range(4,3).startWith(1,2,3) sum: ${sum}`));

range(4, 3)
    .pipe(scan((x, y) => x + y))
    .subscribe(sum => console.log(`range(4,3) sum: ${sum}`));
