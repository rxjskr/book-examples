const { of } = require('rxjs');
const { reduce } = require('rxjs/operators');

of(0)
    .pipe(reduce((acc, curr) => acc + curr))
    .subscribe(x => console.log(x));
