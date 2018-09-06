const { range } = require('rxjs');
const { map, pluck } = require('rxjs/operators');

const source$ = range(0, 5).pipe(
    map(x => ({
        x,
        isEven: x % 2 === 0
    }))
);

source$
    .pipe(pluck('isEven'))
    .subscribe(isEven => console.log(`${isEven ? '짝수' : '홀수'} 입니다.`));

source$.pipe(pluck('x')).subscribe(x => console.log(`${x} 입니다.`));
