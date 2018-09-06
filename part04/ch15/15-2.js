function makeAsync(text, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(text), ms);
    });
}

function doAsync(generator) {
    const iterator = generator();

    function asyncFlow(result) {
        const { value, done } = iterator.next(result);

        if (done) {
            return value;
        } else {
            if (value instanceof Promise) {
                return value.then(val => asyncFlow(val));
            } else {
                return asyncFlow(value);
            }
        }
    }

    asyncFlow();
}

doAsync(function*() {
    const foo = yield makeAsync('foo', 1000);
    console.log(foo); //foo

    const bar = yield makeAsync('bar', 2000);
    console.log(bar); //bar

    const baz = yield makeAsync('baz', 3000);
    console.log(baz); //baz

    console.log('completed');
});
