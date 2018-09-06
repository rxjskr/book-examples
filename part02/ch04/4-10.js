const { interval } = require('rxjs');
const { filter, takeWhile, takeLast } = require('rxjs/operators');
interval(300)
    .pipe(
        filter(x => x >= 7 || x % 2 === 0),
        takeWhile(x => x <= 10),
        takeLast(4)
    )
    .subscribe(x => console.log(x));

