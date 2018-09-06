const { of, asapScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');
console.log('start');
of(1, 2, 3)
    .pipe(observeOn(asapScheduler))
    .subscribe(x => console.log(x));
console.log(`actions length: : ${asapScheduler.actions.length}`);
console.log('end');
