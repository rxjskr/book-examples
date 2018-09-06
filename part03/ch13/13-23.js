const { range, queueScheduler } = require('rxjs');
const { mergeMap, observeOn } = require('rxjs/operators');

console.log('start queue');
range(0, 3, queueScheduler)
    .pipe(mergeMap(x => range(x, 3, queueScheduler)))
    .subscribe(x => console.log(x));
console.log('end queue');

console.log('start without queue');
range(0, 3)
    .pipe(mergeMap(x => range(x, 3)))
    .subscribe(x => console.log(x));
console.log('end without queue');
