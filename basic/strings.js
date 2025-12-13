const name="pratiksha";
const lastname="Jadhav";
//use a backtiks that string interpolation creates a placeholders and directly injects the var
console.log(`name is:${name} and last name is:${lastname}`);

const gameName =new String('   ludo');// way to reate the string 
console.log(typeof String);

//shows the string vlues in key value pair
//acts as a object

console.log(gameName[0]);
//to access the prototype
console.log(gameName.__proto__);//method that acts as a prototype {}
console.log(gameName.length);
console.log(gameName.charAt(2));
//to reverse the same process
console.log(gameName.indexOf('l'));//finding the index of the that letter
const sub=gameName.substring(0,2);//it excludes the last one 
console.log(sub);//not llow -ve values

const slice=gameName.slice(-4,3);
//how it actually works 
//index=length+(-val) for single val go onwards
//two val start end 
//4-4=0
//start with 0 and go upto 3 last val is excluded

console.log(slice);//allow the negative val as it acts in reverse 

//trim
const trimV=gameName.trim();
console.log(gameName);
console.log(trimV);

const url="http/pratik20%jadhav.com";
console.log(url.replace('20%','-'));
console.log(url.includes('pratik'));

const name1=new String("pratiksha-jd-pm");
//converting or splting them into array
console.log(name1.split('-'));
