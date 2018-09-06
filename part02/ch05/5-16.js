const { timer, interval, range } = require('rxjs');
const { map, take, concatMap } = require('rxjs/operators');
const requests = [
    timer(2000).pipe(map(value => 'req1')),
    timer(1000).pipe(map(value => 'req2')),
    timer(1500).pipe(map(value => 'req3'))
];

interval(1000)
    .pipe(take(5))
    .subscribe(x => console.log(`${x + 1} secs`));

range(0, 3)
    .pipe(concatMap(x => requests[x]))
    .subscribe(req => console.log(`response from ${req}`));
