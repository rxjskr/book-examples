const { interval, zip, timer, Subject } = require('rxjs');
const { take, mergeMap, tap } = require('rxjs/operators');

interval(1500)
    .pipe(take(6))
    .subscribe(x => console.log(`${(x + 1) * 1500}ms elapsed`));

const sourceObservable$ = interval(1500).pipe(
    take(5),
    tap(x => console.log(`tap ${x}`))
);
zip(sourceObservable$, sourceObservable$, (a, b) => a + ',' + b).subscribe(
    val => console.log('value : ' + val)
);
