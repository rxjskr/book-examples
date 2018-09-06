const { of, asyncScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');
console.log('start');
of(1, 2, 3)
    .pipe(observeOn(asyncScheduler, 1000))
    .subscribe(x => console.log(x));
console.log(`actions length: : ${asyncScheduler.actions.length}`);
console.log('end');
