const { interval } = require('rxjs');
const { take, filter, map } = require('rxjs/operators');
const tapIndex = require('./myOperators/tapIndex');

interval(200)
    .pipe(
        take(10),
        filter(x => x % 2 === 0),
        tapIndex((value, index) =>
            console.log(`value: ${value}, index: ${index}`)
        ),
        map(x => x + 1)
    )
    .subscribe(result => console.log(`result: ${result}`));
