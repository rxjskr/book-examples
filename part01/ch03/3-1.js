const { Observable } = require('rxjs');
const observable1to10$ = Observable.create(function(observer) {
    console.log('[observable1to10] BEGIN subscribe function');

    for (let value = 1; value <= 10; value++) {
        observer.next(value);
    }

    observer.complete();

    // 실행되지 않음
    observer.next(11);
    observer.error(new Error('error'));
    observer.complete();

    console.log('[observable1to10] END subscribe function');

    return function() {
        console.log('observable1to10 unsubscribed');
    };
});

observable1to10$.subscribe(
    function next(value) {
        console.log(`next value: ${value}`);
    },
    function error(err) {
        console.error(`error`, err.message);
    },
    function complete() {
        console.log('complete!');
    }
);


