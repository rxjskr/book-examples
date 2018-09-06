const { timer, interval, range } = require('rxjs');
const { startWith, tap, skip, map, take, concatMap } = require('rxjs/operators');
const FIRST_VALUE = -1;
const requests = [
    timer(2000).pipe(
        startWith(FIRST_VALUE),
        tap(x => x === FIRST_VALUE && console.log('req1 subscribed')),
        skip(1),
        map(value => 'req1')
    ),
    timer(1000).pipe(
        startWith(FIRST_VALUE),
        tap(x => x === FIRST_VALUE && console.log('req2 subscribed')),
        skip(1),
        map(value => 'req2')
    ),
    timer(1500).pipe(
        startWith(FIRST_VALUE),
        tap(x => x === FIRST_VALUE && console.log('req3 subscribed')),
        skip(1),
        map(value => 'req3')
    )
];

interval(1000)
    .pipe(take(5))
    .subscribe(x => console.log(`${x + 1} secs`));

range(0, 3)
    .pipe(
        tap(x => console.log(`range next ${x}`)),
        concatMap(
            x =>
                console.log(`begin concatMap project function ${x}`) ||
                requests[x]
        )
    )
    .subscribe(req => console.log(`response from ${req}`));
