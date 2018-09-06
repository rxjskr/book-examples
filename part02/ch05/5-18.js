const { range } = require('rxjs');
const { scan } = require('rxjs/operators');

range(0, 3)
    .pipe(
        scan((accumulation, currentValue) => {
            console.log(
                `accumulation ${accumulation}, currentValue ${currentValue}`
            );
            return accumulation + currentValue;
        })
    )
    .subscribe(result => console.log(`result ${result}`));
