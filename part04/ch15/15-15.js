const { from } = require('rxjs');
const { map } = require('rxjs/operators');

function time(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

from([1, 2, 3])
    .pipe(map(x => time(x * 1000)))
    .subscribe(async delayPromise => {
        const startTime = Date.now();
        await delayPromise; // 1초, 2초, 3초 대기
        const delayTime = Date.now() - startTime;
        console.log(delayTime + 'ms 기다림');
    });
