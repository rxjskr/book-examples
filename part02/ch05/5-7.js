const { timer, range } = require('rxjs');
const { map } = require('rxjs/operators');

const requests = [
    timer(Math.floor(Math.random() * 2000)).pipe(map(value => 'req1')),
    timer(Math.floor(Math.random() * 1000)).pipe(map(value => 'req2')),
    timer(Math.floor(Math.random() * 1500)).pipe(map(value => 'req3'))
];

range(0, 3).subscribe(x =>
    requests[x].subscribe(req => console.log(`response from ${req}`))
);
