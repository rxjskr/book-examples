const { from, of } = require('rxjs');
const { mergeMap, tap, catchError } = require('rxjs/operators');
from(['1', '2', '3', 'r', '5', '6', 'u', '8'])
    .pipe(
        mergeMap(x => {
            return of(x).pipe(
                tap(value => {
                    if (!Number.isInteger(parseInt(value, 10))) {
                        throw new TypeError(`${value}은(는) 정수가 아닙니다`);
                    }
                }),
                catchError(err => of(err.message))
            );
        })
    )
    .subscribe(x => console.log(x), err => console.error(err));
