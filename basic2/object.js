// to types for the declaring
// object literals
//2.constructors (singalton)
//1.singleton:when we created with the constructor
//2.with literals then it not created as singalton


//ways to create
//1.constructor
//2.literals
// Object.create ..constructor method (singalton)
//object consists the key value pairs

const use=
{
    name:"pratiksha", 
    age:18,         //here age is tracked as string behind so need to pass like that
    location:"karad",
    email:"pratiksha@123",
    // "full_name":"pratiksha jadhav",
     "full name":"pratiksha jadhav",
}

console.log(use.age);
console.log(use["age"]);//shows the not defined
// console.log(use.full name);//if key declaration according with rule then it works as i used _ but 
//without it was not run like only full name
console.log(use["full name"]);

const sym=Symbol("key1");
//add a symbol to keys and print it

const obj1=
{
    clg:"TKIET",
    year:2022,
    [sym]:"123",//not a prefered method
};
//console.log(obj1.sym);
console.log(typeof obj1[sym]);
//console.log(typeof obj1.sym);//shows the string value for treating it as symbol use[]

obj1.clg="fkiet";
// to freeze the object we use freez so its value can not be changed
// Object.freeze(obj1);
obj1.clg="jkiet";//not changed
console.log(obj1);

//function
obj1.greet=function()
{
    console.log("HI user....");
}
console.log(obj1.greet());//greet() here 1s t shows error due to we freeze the obj
console.log(obj1.greet);//function reference return back

obj1.greet2=function()
{
    console.log(`HI user...., ${this.clg}`);
}
//reference something from the obj
console.log(obj1.greet2());