const { Subject } = require('rxjs');

const subject = new Subject();
subject.subscribe({
    next: function(v) {
        console.log('observerA: ' + v);
    }
});

subject.subscribe({
    next: function(v) {
        console.log('observerB: ' + v);
    }
});

subject.next(1);
subject.next(2);

subject.complete();
subject.next(3); // 전달 안 됨

