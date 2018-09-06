const { interval } = require('rxjs');
const { take, groupBy, mergeMap, map } = require('rxjs/operators');

// 1. keySelector 사용
interval(500)
    .pipe(
        take(10),
        groupBy(x => Math.random() < 0.7),
        mergeMap(
            groupedObservable =>
                groupedObservable.key === true
                    ? groupedObservable.pipe(map(x => `당첨!! (${x})`))
                    : groupedObservable.pipe(map(x => `꽝!! (${x})`))
        )
    )
    .subscribe(result => console.log(result));
