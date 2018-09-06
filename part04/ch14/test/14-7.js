const assert = require('assert');

function returnPromise() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve('foo');
        }, 1000);
    });
}

describe('비동기 코드 테스트', function() {
    describe('async/await 테스트', function() {
        // async 함수를 파라미터로 전달
        it('1초 후 값을 전달받는 함수', async function() {
            const result = await returnPromise();
            assert.ok(result === 'foo');
        });
    });
});
