const { interval } = require('rxjs');
const { partition, take, map } = require('rxjs/operators');

const [winSource$, loseSource$] = interval(500).pipe(
    partition(x => Math.random() < 0.7)
);

winSource$
    .pipe(
        map(x => `당첨!! (${x})`),
        take(5)
    )
    .subscribe(result => console.log(result));

loseSource$
    .pipe(
        map(x => `꽝!! (${x})`),
        take(5)
    )
    .subscribe(result => console.log(result));
