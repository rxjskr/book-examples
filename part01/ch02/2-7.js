const { interval } = require('rxjs');
const observable1 = interval(400);
const observable2 = interval(300);

const subscription = observable1.subscribe(function(x) {
    console.log('first: ' + x);
});
const childSubscription = observable2.subscribe(function(x) {
    console.log('second: ' + x);
});

subscription.add(childSubscription);

setTimeout(function() {
    // Subscription 객체와 하위에 있는 자식 Subscription 객체의 구독을 취소
    subscription.unsubscribe();
}, 1000);

