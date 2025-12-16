// const tinder=new Object();//singolton obj
// console.log(tinder)
// const  tinder={} non singolton object

const tiner={};
tiner.id=123;
tiner.name="pratiksha";

console.log(tiner);
//object inside obj

const nested=
{
    id:123,
    email:"p@gmail.com",
    fullName:
    {
        userFullName:
        {
            firstName:"pratiksha",
            lastName:"jadhav"
        }
    }

};
console.log(nested.fullName.userFullName);
//optional channing
//console.log(nested.fullName?.userFullName);//protection if value is not exist then use this otherwise use another

const obj1=
{
    id:123,
    b:5
};

const obj2=
{
    c:3,
    D:6
};

// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2);//better way it copies the obj and stores at target obj {} acts as target
// console.log(obj3);
const obj4={... obj1,...obj2};//spread operator

console.log(obj4);

//when values come from the db
//comes as array of objects

const users=
[
    {
        id:1,
        email:"abc@gmail.com",
    },
    {
        id:2,
        email:"ac@gmail.com",
    },
    {
        id:3,
        email:"bc@gmail.com",
    }
];

users[1].email;
console.log(Object.keys(tiner));//shows th dt array
console.log(Object.values(tiner));
console.log(Object.entries(tiner));//gives arrays inside array array of keys value pairs
console.log(tiner.hasOwnProperty('name'));

//enumerable means can we apply the loop on it or not