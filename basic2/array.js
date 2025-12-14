// //array
// //decalration pf the array
// // const array=[0,1,2,3,4,5,true,"pratiksha"];//diff types of the elements are aloowed
// const myArr=[0,1,2,3,4,5];
// //object allow to store collection of multiple itmes in single var
// //resizable
// //mixed
// //array inside array
// //not associative:array ele can not accessed using the arbitary strings
// //zero based indexing
// //it stores the shallow copy
// // -- shallow copy:allow to share same reference point
// //--deep copies:copies do not share the same reference

// //another way to declare array

// const myArry2=new Array(2,3,4,5,6);
// console.log(myArry2[0]);

// myArry2.push(10);
// console.log(myArry2);

// myArry2.unshift(9);//shifting all values and insert it at a start
// console.log(myArry2);
// myArry2.shift();//remove the unshifted value
// console.log(myArry2);
// //includes show boolean val

// //join add all element into string

// const arr=myArry2.join();
// console.log(myArry2);
// console.log(arr);

// //slice:do not manipulate the original array
// //splice :manipulate the original array

// let newarr=[1,2,3,4,5];
// let sliceArray=newarr.slice(1,3);//exclude
// console.log(sliceArray);
// console.log(newarr);// no change in original array

// let spliceArray=newarr.splice(1,3);//include
// console.log(spliceArray);
// console.log(newarr);// change in original array remove the splice elements from array

const fruits=["mango","banana","orange"];
const name=["pratik","sauaru","sonu","sanku"];
// fruits.push(name);
// console.log(fruits);//it shows array inside the array
// console.log(fruits[3][1]);//it shows array inside the array last val contain another array inside


// let conarray=fruits.concat(name);
// console.log(conarray);//returns the new array
const all=[...fruits, ...name];
console.log(all);

let mixedArr=[1,2,[3,4,5],[7,9,0,[5,8]],5,4];
let simplearr=mixedArr.flat(Infinity);
console.log(mixedArr);
console.log(simplearr);//provide the individual ele of array

console.log(Array.from("pratiksha"))//creating array
console.log(Array.from({name:"pratiksha"}))//intreesting gives empty array as need to maintion which type of array should build

let score1=100;
let score2=200;
let score3=300;

//converting it into array
console.log(Array.of(score1,score2,score3));