const promise = new Promise(function(resolve, reject) {
    reject(new Error('error'));
});
promise.then(
    function(value) {
        console.log(value);
    },
    function(error) {
        console.error(error);
    }
);

