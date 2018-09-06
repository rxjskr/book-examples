const { of } = require('rxjs');
const { distinct } = require('rxjs/operators');
of(1, 6, 7, 7, 2, 5, 5, 2, 6)
    .pipe(distinct())
    .subscribe(x => console.log(x));

