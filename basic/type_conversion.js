//let age="21abc";
let age=null;
console.log(typeof(age));
console.log(typeof age);//both are allowed,number
let valInNumber=Number(age);//always show it as number
console.log(typeof valInNumber);
console.log(valInNumber);//if ther is number and string both it convert it as not a number
//for null it shows the 0 after conversion
//for undefined shows the NAN
//for boolean true=1,false=0

//let logedIn=1;//true
//let logedIn="";//false
let logedIn="pratiksha";//true

let newLogIn=Boolean(logedIn);
console.log(newLogIn);
let no=100;
let strNo=String(no);
console.log(strNo);
console.log(typeof strNo);