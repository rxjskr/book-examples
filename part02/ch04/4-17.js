const { interval } = require('rxjs');
const { take, debounceTime } = require('rxjs/operators');
interval(400)
    .pipe(take(4), debounceTime(300))
    .subscribe(x => 
        console.log(`- interval(400).pipe(take(4),debounceTime(300)) next: ${x}`)
    );

interval(400)
    .pipe(take(4), debounceTime(500))
    .subscribe(x => 
        console.log(`-- interval(400).pipe(take(4),debounceTime(500)) next: ${x}`)
    );

