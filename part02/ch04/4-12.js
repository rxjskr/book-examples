const { interval } = require('rxjs');
const { skipUntil, take } = require('rxjs/operators');
const sourceIntervalTime = 300;
interval(sourceIntervalTime)
    .pipe(
        skipUntil(interval(sourceIntervalTime * 5)),
        take(3)
    )
    .subscribe(x => console.log(x));

