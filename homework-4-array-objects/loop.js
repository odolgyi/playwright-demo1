for (let index = 0; index < 10; index++) {
    console.log(index);
}

console.log('###################');
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
console.log('###################');
let increment = 0;
do {
    console.log(increment);
    increment++;
}
while (increment < 10);
//
//*****************************************************
for (let index = 100; index >= 0; index -= 10) {
    console.log(index);
}

let increment1 = 100;
do {
    console.log(increment1);
    increment1-=10;
}
while (increment1 >=0);

let increment3 = 100;
while (increment3 >=0){
    console.log(increment3);
    increment3-=10;
}
//*********************************
const loopHome56 = Array.from({ length: 10 }, (_, index) => index);
for (const el in loopHome56) {
    console.log(loopHome56[el]);  //Виводимо значення за індексом
}
