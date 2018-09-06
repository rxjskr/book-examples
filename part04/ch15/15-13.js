const { interval } = require('rxjs');
const { take } = require('rxjs/operators');

(async function () {
    await interval(500)
        .pipe(take(3))
        .forEach(i => console.log(i));
    console.log('완료!');
}) ();
