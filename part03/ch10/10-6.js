const { interval, of, throwError } = require('rxjs');
const { take, mergeMap, tap, retryWhen, scan, catchError } = require('rxjs/operators');
const n = 2;
interval(100)
    .pipe(
        take(30),
        mergeMap(x => {
            return of(x).pipe(
                tap(value => {
                    if (Math.random() <= 0.5) {
                        throw new Error(`RANDOM ERROR ${value}`);
                    }
                }),
                retryWhen(errors => {
                    return errors.pipe(
                        scan(
                            (acc, error) => {
                                return {
                                    count: acc.count + 1,
                                    error
                                };
                            },
                            { count: 0 }
                        ),
                        mergeMap(errorInfo => {
                            if (errorInfo.count === n + 1) {
                                return throwError(errorInfo.error);
                            }
                            return of(errorInfo);
                        }),
                        tap(errorInfo =>
                            console.error(
                                `retryCount: ${
                                    errorInfo.count
                                }, error message: ${errorInfo.error.message}`
                            )
                        )
                    );
                }),
                catchError(err => of(err.message))
            );
        })
    )
    .subscribe(x => console.log(x), err => console.error(err));