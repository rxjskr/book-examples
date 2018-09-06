const { Observable } = require('rxjs');
const observableCreated$ = Observable.create(function(observer) {
    try {
        observer.next(1);
        observer.next(2);
        throw('throw err test');
    } catch (err) {
        observer.error(err);
    } finally {
        observer.complete();
    }
});

observableCreated$.subscribe(
    function next(item) { console.log(item); },
    function error(err) { console.log ('error: ' + err); },
    function complete() { console.log('complete'); }
);

