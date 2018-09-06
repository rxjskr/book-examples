const assert = require('assert');
const { range, asapScheduler } = require('rxjs');
const { map, reduce } = require('rxjs/operators');

describe('RxJS 테스트', function () {
    describe('비동기 코드 테스트', function () {
        it('asap 스케쥴러', function () {
            // 스케줄러를 포함하면 비동기로 동작
            range(1, 5, asapScheduler)
                .pipe(
                    map(n => n * 2),
                    reduce((s, n) => s + n)
                )
                .subscribe(function (x) {
                    // 비동기 코드 테스트에서 done 함수를 호출하지 않으면
                    // 잘못된 어서션이라도 테스트가 성공한다.
                    assert.equal(x, -1);
                });
        });
    });
});
