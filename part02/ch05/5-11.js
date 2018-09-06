const { range } = require('rxjs');
const { mergeMap } = require('rxjs/operators');

range(0, 3)
    .pipe(
        mergeMap(
            x =>
                new Promise(resolve =>
                    setTimeout(
                        () => resolve(`req${x + 1}`),
                        Math.floor(Math.random() * 2000)
                    )
                )
        )
    )
    .subscribe(req => console.log(`response from ${req}`));
