const assert = require('assert');

function asyncFunc(cb) {
    setTimeout(function() {
        // 3초 후 콜백 함수에 'foo' 를 전달
        cb('foo');
    }, 3000);
}

describe('비동기 코드 테스트', function() {
    describe('#setTimeout', function() {

        // 타임아웃을 5초로 변경
        this.timeout(5000);

        it('5초 안에 완료되지 않으면 실패', function(done) {
            asyncFunc(function(result) {
                assert.ok(result === 'bar');
                done();
            });
        });
    });
});