const { interval } = require('rxjs');
const { take, groupBy, tap, mergeMap, map, reduce } = require('rxjs/operators');

// 4. keySelector, elementSelector, durationSelector, reduce 사용
interval(500)
    .pipe(
        take(10),
        groupBy(
            x => Math.random() < 0.7,
            x => `${x}-${x % 2 === 0 ? '짝수' : '홀수'}`, // x => x % 2 === 0
            groupedObservable =>
                groupedObservable.key === true
                    ? interval(600).pipe(
                          tap(x => console.log(`당첨 duration ${x}`))
                      )
                    : interval(2000).pipe(
                          tap(x => console.log(`꽝 duration ${x}`))
                      )
        ),
        mergeMap(
            groupedObservable =>
                groupedObservable.key === true
                    ? groupedObservable.pipe(
                          map(x => `당첨!! (${x})`),
                          reduce((acc, curr) => [...acc, curr], [])
                      )
                    : groupedObservable.pipe(
                          map(x => `꽝!! (${x})`),
                          reduce((acc, curr) => [...acc, curr], [])
                      )
        )
    )
    .subscribe(result => console.log(result));
