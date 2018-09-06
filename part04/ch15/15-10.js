const { from, of } = require('rxjs');
const { mergeAll, reduce } = require('rxjs/operators');

const gen = from((function* () {
    const a = yield 'R';
    const b = yield ['X'];
    const c = yield of('J');
    const e = yield Promise.resolve('S');
})())
.pipe(mergeAll())
.pipe(reduce((sum, s) => sum + s));

gen.subscribe(
    function (x) { console.log('next', x); },
    function (err) { console.log('error', err); },
    function () { console.log('completed'); }
);
