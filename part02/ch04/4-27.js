const { timer } = require('rxjs');
const { sampleTime, take } = require('rxjs/operators');
// source: 0(300ms)  1(700ms)  2(1100ms)  3(1500ms)  4(1900ms)  5(2300ms)
// sample:                800ms                 1600ms               2400ms
const sourcePoint = 300;
const sourceDelay = 400;
const sampleCount = 2;
const samplePeriod = sourceDelay * sampleCount; // 800ms

timer(sourcePoint, sourceDelay) // 300ms, 400ms
    .pipe(
        sampleTime(samplePeriod), // 800ms
        take(3)
    )
    .subscribe(result => console.log(result));

