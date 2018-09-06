const { defer } = require('rxjs');

function getPromise(val) {
    return new Promise(resolve => resolve(val));
}

defer(async function() {
    return await getPromise('Hello RxJS!');
}).subscribe(x => console.log(x));
