const assert = require('assert');
const { range } = require('rxjs');
const { map, reduce } = require('rxjs/operators');

describe('RxJS 테스트', function () {
    describe('동기 코드 테스트', function () {
        it('range, map, reduce 오퍼레이터', function () {
            range(1, 5)
                .pipe(
                    map(n => n * 2),
                    reduce((s, n) => s + n)
                )
                .subscribe(function (x) {
                    // 일반적인 동기 코드 테스트와 같다.
                    assert.equal(x, 30);
                });
        });
    });
});
