//tere are two type for the datatypes
//it would be decided how the data would store in memory and how to retrieve it from memory

//1.primitive type(call by value do not allow to change at memory allow to creteate the copy and then change it)
//1.number
let num=100;
//2.null
let val=null;
//3.string
let name="pratik";
//4.symbol
//5.boolean
let isTrue=true;
//6.bigint:used to store larger values such as scientific values
//7undefined
let email;//or let email=undefined;

//2.non primitives(reference type)
//1.array
//2.function
//3.object


//js is dynamically scripted lang thatmeans the var types are determined at runtime and no need to mention them explicitly
//on other hand  java cpp typescript are statically typed and they require you to specify the data type explicitly at veriable declaration

//symbol used for the uniqueness

const id=Symbol('123');
const anoterId=Symbol('123')

console.log(id);
console.log(anoterId);
console.log(anoterId==id);

const bigNumber=12345567n;//n for bigint
console.log(typeof bigNumber);

const heros=["nagaraj","shaktiman"];//array

const obj=
{
    name:"pratik",
    age:21,
};
console.log(obj);

//function

const myFunction=function age()
{
    console.log("hello");
    }
    myFunction();//as we are storing sunction in var we need to call a var
    //console.log(myFunction);
    console.log(typeof myFunction);//function-fun(function obj)
    console.log(typeof obj);//obj-obj
    console.log(typeof heros);//array-object