// memory management in js
// stack and heap memory
//stacK:used to store primitive valus(get a copy of original val)
//heap:used to store non primitive(get ref of original val)
let name='PRATIK';
let anotherNmae=name;
console.log(anotherNmae);
anotherNmae='rasika';
console.log(anotherNmae);
console.log(name);

let obj=
{
    name:"pppp",
    age:21,
};
let obj2=obj;
obj2.age=35;
console.log(obj.age);//value chaned
console.log(obj2.age);