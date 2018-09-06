const { Observable } = require('rxjs');
const { map } = require('rxjs/operators');
const observableCreated$ = Observable.create(function(observer) {
    observer.next(1);
    observer.next(2);
    observer.complete();
});

observableCreated$.pipe(
    map(function(value) {
        return value * 2;
    })
).subscribe(function next(item) {
    console.log(item);
});

