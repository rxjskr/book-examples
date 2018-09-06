const { of, asapScheduler } = require('rxjs');
console.log('start');
of(1, 2, 3, asapScheduler).subscribe(x => console.log(x));
console.log(`actions length: : ${asapScheduler.actions.length}`);
console.log('end');