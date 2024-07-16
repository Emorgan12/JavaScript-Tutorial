//Day is a variable because the day of the week can change
let Day = 'Monday';

//Name is a constant because the name of the person will not change
const Name = 'Elliot';

//These are different ways of assigning strings to variables
let favouriteFruit = 'Strawberry';
let favouriteIceCream = "Vanilla";
let favouriteProgrammingLanguage = `Python`;

//These are ways of assigning numbers to variables
let Num = 5;
let Num1 = 4.2;
let veryLargeNumber = 75986696473604369543n;

//This is how to assign a boolean value to a variable
let isTrue = true;

//This is an undefined data type
let favouriteColour;

//This is a symbol data type
const sym = Symbol();

//This is a null data type
let favouriteFood = null;

//This is dynamic typing
favouriteColour = 'Blue';
favouriteColour = 12;
favouriteColour = true;

//This is an object data type
let person = {
    name: 'Elliott',
    age: 17,
    isStudent: true
};

//Updating the value of a property in an object
person['name'] = 'Elliot';
console.log(person['name']);

console.log("End of section")
//Accessing a property in an object using a string variable as the key
let property = 'age';
console.log(person[property]);

console.log("End of section")
//This is an array data type
let colours = ['Red', 'Green', 'Blue'];
console.log(colours.length);    
console.log(colours[0]);

console.log("End of section")
//This is a function
function SayHello(name) {
    console.log('Hello ' + name);
}
SayHello(person['name']);

function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(5, 6));

console.log("End of section")
//These are comparison/equality operators
let a = 10;
let b = 5;

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a === b);

console.log("End of section")
//This is the ternary operator
let isAdult = person['age'] >= 18 ? 'Yes' : 'No';
console.log(isAdult);

console.log("End of section")
