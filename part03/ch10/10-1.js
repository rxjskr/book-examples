const { from, of } = require('rxjs');
const { map, tap, pluck, catchError } = require('rxjs/operators');
const integers = ['1', '2', '3', 'r', '5'];
from(integers)
    .pipe(
        map((value, index) => ({ value, index })),
        tap(valueIndex => {
            const { value, index } = valueIndex;
            if (!Number.isInteger(parseInt(value, 10))) {
                const error = new TypeError(`${value}은(는) 정수가 아닙니다`);
                error.index = index;
                error.integerCheckError = true;
                throw error;
            }
        }),
        pluck('value'),
        catchError(err => {
            if (err.name === 'TypeError' && err.integerCheckError) {
                const catchArray = [err.message];
                const restArray = integers
                    .slice(err.index, integers.length)
                    .map(x => `에러 후 나머지 값 ${x}`);
                return from([err.message].concat(restArray));
            }
            return of(err.message);
        })
    )
    .subscribe(x => console.log(x), err => console.error(err));
