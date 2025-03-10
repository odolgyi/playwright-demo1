const letterArray =  ['apple', 'juice', 'reactangle', 5, 6, 7];

const charArray = [];
letterArray.forEach((el) => {
    if (typeof el === 'string' ){
        charArray.push(el);
    }
});

console.log(charArray);

const charArrayMap = letterArray
    .map((el) => {
        if (typeof el === 'string' ){
            return el;
        }
        return null;
    });

console.log(charArrayMap);

const numberArray =  [9, 5, 6, 7, 'car', 'pen', 'angle'];

const phoneArray = [];
numberArray.forEach((el) => {
    if (typeof el === 'number' ){
        phoneArray.push(el);
    }
});

console.log(phoneArray);

const phoneArrayMap = numberArray
    .map((el) => {
        if (typeof el === 'number' ){
            return el;
        }
        return undefined;
    });

console.log(phoneArrayMap);
