const { interval } = require('rxjs');
const { toArray } = require('rxjs/operators');

(async function () {
    const list = await interval(100)
        .pipe(toArray())
        .toPromise();

    // 영원히 호출되지 않는다.
    console.log(list);
}) ();