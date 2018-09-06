const { interval } = require('rxjs');
const { skipWhile, take } = require('rxjs/operators');
interval(300)
      .pipe(
          skipWhile(x => x < 4),
          take(3)
      )
      .subscribe(x => console.log(x));

