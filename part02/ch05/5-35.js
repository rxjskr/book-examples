const { interval } = require('rxjs');
const { take, map, windowCount, mergeMap, defaultIfEmpty, scan, last, filter } = require('rxjs/operators');

const message = '간장공장공장장은강공장장이고공공장공장장은장공장장이다';
const targetWord = '공장장';

interval(10)
    .pipe(
        take(message.length),
        map(charIndex => {
            const character = message.charAt(charIndex);
            console.log(`${character}`);
            return character;
        }),
        windowCount(targetWord.length, 1),
        mergeMap(windowObservable => {
            console.log(`windowObservable 넘어옴`);
            return windowObservable.pipe(
                defaultIfEmpty({empty: true}),
                scan((accString, current) => current.empty ? current : accString + current, ''),
                last()
            );
        }),
        filter(word => {
            if (typeof word === 'string') {
                console.log(`현재단어: ${word}`);
                return word === targetWord;
            }
            return false;
        })
    )
    .subscribe(word => console.log(`${word} 발견!`));