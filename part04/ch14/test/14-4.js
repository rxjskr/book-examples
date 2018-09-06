const assert = require('assert');

function asyncFunc(cb) {
    setTimeout(function() {
        // 3초 후 콜백 함수에 'foo'를 전달
        cb('foo');
    }, 3000);
}

describe('비동기 코드 테스트', function() {
    describe('#setTimeout', function() {
        it('2초를 지나 done 함수가 호출되어 실패하는 테스트', function(done) {
            asyncFunc(function(result) {
                // 가정은 성공해야 하는 테스트지만,
                assert.ok(result === 'bar');

                // done 함수의 호출이 기본 제한 시간인 2초를 지나 실패한다.
                done();
            });
        });
    });
});