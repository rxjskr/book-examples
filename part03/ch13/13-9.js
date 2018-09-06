const { asapScheduler } = require('rxjs');
console.log('start');
asapScheduler.schedule(function work(value) {
    value = value || 1;
    console.log(value);
    var selfAction = this;
    if (value < 3) {
        selfAction.schedule(value + 1);
    }
});
console.log(`actions length: : ${asapScheduler.actions.length}`);
console.log('end');
