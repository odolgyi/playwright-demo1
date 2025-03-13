function sumOfArrayFunction(numberArray: (string | number)[]): string | number {
    let sumOfElements = 0;
    let str = '';
    let containsNumbers = false;
    numberArray.forEach((el: string | number) => {
        if (typeof el === 'number') {
            sumOfElements += el;
            containsNumbers = true;
        } else {
            str += el + ' ';
        }
    });
    if (containsNumbers) {
        return sumOfElements;
    } else {
        return str.trim();
    }
}

console.log(sumOfArrayFunction([1, 3, 5, 6, 7, 10]));
console.log(sumOfArrayFunction(['Hello', 'working', 'people', 'Friday', 'is', 'coming!']));
