const { interval } = require('rxjs');
const { take, switchMap, map } = require('rxjs/operators');

interval(600)
    .pipe(
        take(5),
        switchMap(x =>
            interval(250).pipe(
                map(y => ({ x, y })),
                take(3)
            )
        )
    )
    .subscribe(result => console.log(`next x: ${result.x}, y: ${result.y}`));
