const { of, zip } = require('rxjs');
const fruits$ = of('오랜지', '바나나', '키위');
const numbers$ = of(5, 3, 2, 10, 11);

zip(fruits$, numbers$, (fruit, number) => `${fruit} ${number}개`)
    .subscribe(combination => console.log(`${combination} 착즙`));