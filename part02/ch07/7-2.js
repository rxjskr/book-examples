const { range } = require('rxjs');
const { reduce } = require('rxjs/operators');

range(1, 4)
    .pipe(reduce((acc, curr) => acc + curr))
    .subscribe(x => console.log(x));
