const assert = require('assert');

describe('비동기 코드 테스트', function() {
    describe('프로미스 테스트', function() {
        it('1초 후 resolve', function() {
            // 프로미스를 리턴하면, 프로미스가 완료될 때까지
            // 해당 테스트가 끝나지 않는다.
            return new Promise(function(resolve) {
                setTimeout(function() {
                    resolve('foo');
                }, 1000);
            })
            .then(function(result) {
                assert.ok(result === 'foo');
            });
        });
    });
});
