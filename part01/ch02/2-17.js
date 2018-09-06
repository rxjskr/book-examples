const promise = new Promise(function(resolve, reject) {
    resolve(1);
});
promise.then(function(value) {
    console.log(value);
});

