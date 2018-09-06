const { interval, timer } = require('rxjs');
const { sample, take } = require('rxjs/operators');
// source: 0(200ms),......,3(800ms),...., 6(1400ms), ...., 9(2000ms)
// sample:      0(300ms)       1(900ms)        2(1500ms)       3(2100ms)
const sampleSize = 3;
const sourceInterval = 200;
const sampleDelay = 100;
interval(sourceInterval) // 200ms
    .pipe(
        sample(
            timer(
                sourceInterval + sampleDelay, /*300ms*/
                sourceInterval * sampleSize   /*600ms*/
            )
        ),
        take(4)
    )
    .subscribe(result => console.log(result));

