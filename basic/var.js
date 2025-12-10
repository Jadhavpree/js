console.log("Pratiksha");

//var are acts as a container that stores the information
// storing:memory space
//var:can change and constants:can not change 

const accountId=12345; //can not change
let accountEmail="p@1234.com";//can change
var accountPass="12345";//can change,not used mostly
accountCity="pune";

// accountId=2;
console.log(accountId);
accountEmail="abc@123";
accountCity="satara";
accountPass="345";
console.table([accountEmail,accountId,accountCity,accountPass]);
//to display the multiple content at a time
//problem of js with the scope to resolve that we need a let
//var:not used mostly as problem with the scope such as block and fuctional
//let:having scope

let accountState;
console.log(accountState);//undefined as not mentioned