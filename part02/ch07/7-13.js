const { range } = require('rxjs');
const { count } = require('rxjs/operators');

range(1, 20)
    .pipe(count())
    .subscribe(x => console.log(x));
