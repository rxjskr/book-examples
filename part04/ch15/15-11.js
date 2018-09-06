const { from, merge } = require('rxjs');
const { toArray } = require('rxjs/operators');

function getPromise(val) {
    return new Promise(resolve => resolve(val));
}

(async function () {
    const list = await merge(
        from(getPromise('foo')),
        from(getPromise('bar')),
        from(getPromise('baz'))
    )
    .pipe(toArray())
    .toPromise() // await를 사용하려고 프로미스로 변환

    console.log(list);
}) ();