//Arithmetic

let x = 2 + 4 + 3;
console.log(x);
x = "john" + " " + "doe";
console.log(x);
x = 2 + 3 + "5";
console.log(x);

//Let and var

var y = 10;
{
    var y = 20;
}
console.log(y);

let z = 10;
{
    let z = 20;
}
console.log(z);

/* This wil error because let variables cannot be used before they are declared
name = "John";
let name;
*/

//This will not error because var variables can be declared at any point
name = "John";
var name;
console.log(name);

//const

//This will error because you cannot declare a const variable without assigning a value
//const PI;

//This will error because you cannnot access a const variable before it is declared
//console.log(PI);

const PI = 3.14159;

//This will error because you cannot reassign a const variable
//PI = 3.14;
//PI = PI + 10;

//You can also have const arrays and objects
const cars = ["BMW", "Volvo", "Saab"];

//You can change the contents of a const array
cars[0] = "Ford";
cars.push("Audi");

//You cannot change the array itself
//cars = ["Toyota", "Volvo", "Saab"];

//This is the same for a const object

//Escape Characters
console.log("Hello World\"");

//String Methods
let str = "Hello World";
console.log(str.length);
console.log(str.at(0));
console.log(str.at(-4));
console.log(str[0]);
console.log(str.slice(0, 5));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

str1 = "Hello";
str2 = "World";
console.log(str1.concat(" ", str2));