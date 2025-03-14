const sumOfArray = (numberArray: (string[] | number[])) : string | number => {
    let sumOfElements = 0;
    let str = '';
    let containsNumbers = false;
    for (const el of numberArray) {
        if (typeof el === 'number') {
            sumOfElements += el;
            containsNumbers = true;
        } else {
            str += el + ' ';
        }
    }
    if (containsNumbers) {
        return sumOfElements;
    } else {
        return str.trim();
    }
};

console.log(sumOfArray([1, 3, 5, 6, 7, 10]));
console.log(sumOfArray(['Hello', 'working', 'people', 'Friday', 'is', 'coming!']));
