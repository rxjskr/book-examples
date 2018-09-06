const sourceArray = [1, 2, 3, 4, 5];
const resultArray = sourceArray.map(x => x + 1).map(x => x * 2);

for (let i = 0; i < resultArray.length; i++) {
    console.log(resultArray[i]);
}
