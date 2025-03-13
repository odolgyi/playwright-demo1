let number1 = 5;
let number2 = 6;
let number3 = 8;

if (number2 > number1) {
    console.log('logic 1 =', number1);
}
//logic 2
if (number3 > number2) {
    console.log(number3, ' is bigger then ', number2);
} else {
    console.log(number2, ' is bigger then ', number3);
}
//logic 3
if (number1 > number2) {
    console.log(number1, ' is  the smallest number');
} else if (number3 > number2 && number2> number1) {
    console.log(number2, ' is middle number ');
} else {
    console.log(number3, ' is biggest number ');
}
