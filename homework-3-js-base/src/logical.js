let action = 'Play';
let action2 = 'Stay';

let с1 = true;
let с2= false;
let value1 = 5;
let value2 = '5';
let value3= 1;

console.log( с1 == с2);
console.log( value1 == value2);

console.log( с1 === с2);
console.log( value1 === value2);

console.log( value3 == с1);
console.log( value3 === с1);

console.log('true || false ', с1 || с2);
console.log('string === string ',action === action2);
console.log('true && false',с1 && с2);
console.log('!=', !value3);

const number1 = null;
const number2 = 2;
const out1=number1 ?? number2 ?? 4;
console.log('??', out1);
