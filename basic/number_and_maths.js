// //numbers and maths
// const score =400;
// console.log(score);
// const balance=new Number(100);
// console.log(balance);//object type as we use A  new keyword

// console.log(balance.toString());
// console.log(balance.toFixed(2));//fixed to the 2 precision values

// const number=1123.45678;
// console.log(number.toPrecision(4));
// const hundreds=1000000;
// console.log(hundreds.toLocaleString('en-IN'));//, added as used as local



//maths lib
// console.log(Math);
// console.log(Math.abs(-4));//abs values -ve values become +
// console.log(Math.round(4.45));//round of values
// console.log(Math.ceil(4.45));//rounds to upper values
// console.log(Math.floor(4.45));//rounds to lower values

console.log(Math.random());//numbers btn 0 -1
console.log((Math.random()*10)+1);//shifting the number +1 to avoid the 0 value as val can be zero also
//it gives the numbers i bth 1-9

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);