const assert = require('assert');
const { interval, asyncScheduler } = require('rxjs');
const { take, map, reduce } = require('rxjs/operators');
const { TestScheduler } = require('rxjs/testing');

// 테스트할 옵저버블 시퀀스를 테스트하기 쉽도록
// 테스트용 파라미터를 받는 함수로 추출
function intervalSum (period = 10000, scheduler = asyncScheduler) {
    return interval(period, scheduler)
        .pipe(
            take(6),
            map(n => n * 2),
            reduce((s, n) => s + n)
        );
}

describe('RxJS 테스트', function () {
    describe('마블 테스트', function () {
        it('interval 연산자', function () {
            // TestScheduler 인스턴스 생성
            const testScheduler = new TestScheduler(assert.deepStrictEqual);
            // 테스트 대상 옵저버블 생성
            const source$ = intervalSum(10, testScheduler);
            // 예상되는 마블 다이어그램
            const expectedMarbles = '^-----(a|)';
            // 예상되는 발행값
            const expectedValues = { a: 30 };

            // 어서션 설정
            testScheduler.expectObservable(source$)
                .toBe(expectedMarbles, expectedValues);
            // 테스트 실행
            testScheduler.flush();
        })
    });
});