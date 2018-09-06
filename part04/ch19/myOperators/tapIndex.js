const { Subscriber } = require('rxjs');

class DoIndexSubscriber extends Subscriber {
    constructor(destination, nextOrObserver, error, complete) {
        super(destination);

        /* 추가된 부분 */
        this.needIndex = typeof nextOrObserver === 'function';
        const newNextOrObserver = this.needIndex
            ? valueAndIndex => {
                  nextOrObserver(valueAndIndex.value, valueAndIndex.index);
              }
            : nextOrObserver;
        /* 추가된 부분 */

        const safeSubscriber = new Subscriber(
            newNextOrObserver,
            error,
            complete
        );
        safeSubscriber.syncErrorThrowable = true;
        this.add(safeSubscriber);
        this.safeSubscriber = safeSubscriber;

        /* 추가된 부분 */
        this.index = 0; // 몇 번째 index인지 count하기 위해서
    }
    _next(value) {
        const { safeSubscriber } = this;

        // 원래 tap연산자 코드  // safeSubscriber.next(value);
        safeSubscriber.next(
            this.needIndex ? { value, index: this.index++ } : value
        );

        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        } else {
            this.destination.next(value);
        }
    }
    _error(err) {
        const { safeSubscriber } = this;
        safeSubscriber.error(err);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        } else {
            this.destination.error(err);
        }
    }
    _complete() {
        const { safeSubscriber } = this;
        safeSubscriber.complete();
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        } else {
            this.destination.complete();
        }
    }
}

class DoIndexOperator {
    constructor(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    call(subscriber, source) {
        return source.subscribe(
            new DoIndexSubscriber(
                subscriber,
                this.nextOrObserver,
                this.error,
                this.complete
            )
        );
    }
}

module.exports = function tapIndex(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
        return source.lift(
            new DoIndexOperator(nextOrObserver, error, complete)
        );
    };
};
