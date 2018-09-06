const { range } = require('rxjs');
const { mergeMap } = require('rxjs/operators');
const fetch = require('node-fetch');
const colors = [
    'blue', 'red', 'black', 'yellow', 'green',
    'brown', 'gray', 'purple', 'gold', 'white'
];
const concurrent = 5;
const maxDelayInSecs = 6;
console.time('request_color');

range(0, colors.length)
    .pipe(
        mergeMap(colorIndex => {
            const currentDelay = parseInt(
                Math.random() * maxDelayInSecs,
                10
            );
            console.log(
                `[Request Color]: ${
                    colors[colorIndex]
                }, currentDelay: ${currentDelay}`
            );
            return fetch(
                `https://httpbin.org/delay/${currentDelay}?color_name=${
                    colors[colorIndex]
                }`
            ).then(res => res.json());
        }, concurrent)
    )
    .subscribe(
        response =>
            console.log(
                `<Response> args: ${JSON.stringify(
                    response.args
                )}, url: ${response.url}`
            ),
        console.error,
        () => {
            console.log('complete');
            console.timeEnd('request_color');
        }
    );
