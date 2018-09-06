const { range } = require('rxjs');
const { mergeMap } = require('rxjs/operators');

range(0, 3)
    .pipe(
        mergeMap(x => {
            const nextArrayLike = {
                length: 4,
                0: x + 1,
                1: x + 2,
                2: x + 3,
                3: x + 4
            };
            console.log(`typeof nextArrayLike: ${typeof nextArrayLike}`);
            return nextArrayLike;
        })
    )
    .subscribe(value => console.log(`current value: ${value}`));
