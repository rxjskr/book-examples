const { of, queueScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');
console.log('start');
of(1, 2, 3)
    .pipe(observeOn(queueScheduler))
    .subscribe(x => console.log(x));
console.log(`actions length: : ${queueScheduler.actions.length}`);
console.log('end');
