//dates 
let mydate=new Date();
console.log(mydate.toString());//Sat Dec 13 2025 16:15:50 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString());//proper date with day  Sat Dec 13 2025
console.log(mydate.toISOString());//2025-12-13T16:15:50.216Z
console.log(mydate.toJSON());//2025-12-13T16:15:50.216Z
console.log(mydate.toLocaleDateString());//only local date formate 12/12/0222
console.log(mydate.toLocaleString());//local date withj time 12/13/25 4;12;23pm

console.log(typeof mydate);//date is a object in js

// let createdDate=new Date(2022,0,23);//month started with 0 in js for the ''similar as array
let createdDate=new Date("2023-01-12");//if it would written in "" then started from 1
console.log(createdDate.toDateString());

//time stamp
let timestamp=Date.now();
console.log(timestamp);
console.log(timestamp.get);