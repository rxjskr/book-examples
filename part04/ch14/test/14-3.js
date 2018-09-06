const assert = require('assert');

function asyncFunc(cb) {
    setTimeout(function() {
        // 1초 후 콜백 함수에 'foo'를 전달
        cb('foo');
    }, 1000);
}

describe('비동기 코드 테스트', function() {
    describe('#setTimeout', function() {
        it('done 함수를 호출해야 정상적으로 테스트', function(done) { // done 함수
            asyncFunc(function(result) {
                assert.ok(result === 'bar');
                // 콜백 형태의 비동기 함수는 반드시 비동기 호출이
                // 마무리될 때 done 함수를 호출해주어야 한다.
                done();
            });
        });
    });
});
