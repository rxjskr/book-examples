const { range } = require('rxjs');
const { defaultIfEmpty } = require('rxjs/operators');
const getRangeObservable = count => range(1, count);
function subscribeWithDefaultIfEmpty(count) {
    getRangeObservable(count)
        .pipe(defaultIfEmpty('EMPTY'))
        .subscribe(value =>
            console.log(`개수(count): ${count}, 값(value): ${value}`)
        );
}
subscribeWithDefaultIfEmpty(0);
subscribeWithDefaultIfEmpty(3);