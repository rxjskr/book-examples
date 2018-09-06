const { interval } = require('rxjs');
const { take, startWith } = require('rxjs/operators');

interval(1000).pipe(
    take(5),
    startWith('대기중.. 구독됨.. Waiting... subscribed.')
).subscribe(value => console.log(value));