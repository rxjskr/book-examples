const { interval } = require('rxjs');
const { filter, takeWhile } = require('rxjs/operators');
interval(300)
    .pipe(
        filter(x => x >= 7 || x % 2 === 0),
        takeWhile(x => x <= 10)
    )
    .subscribe(x => console.log(x));;

