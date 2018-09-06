// 임의의 비동기 작업을 시뮬레이션하는 함수
function makeAsync(text, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(text), ms);
    });
}

async function someAsync() {
    const foo = await makeAsync('foo', 1000);
    console.log(foo); //foo

    const bar = await makeAsync('bar', 2000);
    console.log(bar); //bar

    const baz = await makeAsync('baz', 3000);
    console.log(baz); //baz

    console.log('completed');
}

// 비동기 함수 실행
someAsync();
