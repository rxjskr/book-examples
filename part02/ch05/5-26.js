const { interval } = require('rxjs');
const { take, groupBy, mergeMap, map, reduce } = require('rxjs/operators');

// 3. keySelector, elementSelector, reduce 사용
interval(500)
    .pipe(
        take(10),
        groupBy(
            x => Math.random() < 0.7,
            x => `${x}-${x % 2 === 0 ? '짝수' : '홀수'}`
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
