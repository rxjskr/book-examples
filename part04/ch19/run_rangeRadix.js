const rangeRadix = require('./myOperators/rangeRadix');

rangeRadix(1, 16, 16)
    .subscribe(value => console.log(value));
