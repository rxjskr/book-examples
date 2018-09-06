const { interval } = require('rxjs');
const { take, map, windowCount, concatMap, filter, scan, last } = require('rxjs/operators');
const message = '안녕하세요. RxJS 테스트 입니다';

interval(90)
    .pipe(
        take(message.length),
        map(x => {
            const character = message.charAt(x);
            console.log(character);
            return character;
        }),
        windowCount(5),
        concatMap(windowObservable => {
            console.log(`windowObservable 넘어옴`);
            return windowObservable.pipe(
                filter(x => x != ' '),
                take(3),
                scan((accString, current) => accString + current, ''),
                last()
            );
        })
    )
    .subscribe(string => console.log(`결과:${string}`));