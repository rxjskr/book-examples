const sourceArray = [1, 2, 3, 4, 5];
const func1 = x => x + 1;
const func2 = x => x * 2;

for (let i = 0; i < sourceArray.length; i++) {
    console.log(func2(func1(sourceArray[i])));
}