const assert = require('assert');
const { interval } = require('rxjs');
const { take, map, reduce } = require('rxjs/operators');

describe('RxJS 테스트', function () {
    describe('비동기 코드 테스트', function () {

        //타임아웃을 100초로 변경
        this.timeout(100 * 1000);

        it('interval 연산자', function (done) {
            interval(10000)
                .pipe(
                    take(6),
                    map(n => n * 2),
                    reduce((s, n) => s + n)
                )
                .subscribe(function (x) {
                    assert.equal(x, 30);
                    //1분 후 테스트가 끝난다.
                    done();
                });
        });
    });
});
