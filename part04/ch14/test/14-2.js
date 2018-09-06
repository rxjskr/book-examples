const assert = require('assert');

function asyncFunc(cb) {
    setTimeout(function() {
        // 1초 후 콜백 함수에 foo를 전달
        cb('foo');
    }, 1000);
}

describe('비동기 코드 테스트', function() {
    describe('#setTimeout', function() {
        it('done 함수를 호출하지 않으면 무조건 성공', function() {
            asyncFunc(function(result) {
                // foo와 bar를 비교하므로 잘못된 결과지만
                // done 함수를 호출하지 않으면 테스트가 성공한다.
                assert.ok(result === 'bar');
            });
        });
    });
});
