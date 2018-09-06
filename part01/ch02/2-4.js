const { Observable } = require('rxjs');
Observable.create(function(observer) {
    console.log('BEGIN Observable');
    observer.next(1);
    observer.next(2);
    observer.complete();
    observer.next(3);
    console.log('END Observable');
}).subscribe(
    function next(item) { console.log(item); },
    function error(e) {},
    function complete() { console.log('complete');}
);

