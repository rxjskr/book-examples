const assert = require('assert');

describe('동기 코드 테스트', function() {
    describe('indexOf() 메서드', function() {
        it('값이 없을 때는 -1을 리턴함', function() {
            assert.ok([1,2,3].indexOf(5) === -1);
        });
    });
});
