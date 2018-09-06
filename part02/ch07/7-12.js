const { from } = require('rxjs');
const { min } = require('rxjs/operators');
const movies = [
    { title: '영화 1', avg: 5.12 },
    { title: '영화 2', avg: 9.14 },
    { title: '영화 3', avg: 5.12 }
];

from(movies)
    .pipe(min((x, y) => x.avg - y.avg))
    .subscribe(x => console.log(JSON.stringify(x)));
