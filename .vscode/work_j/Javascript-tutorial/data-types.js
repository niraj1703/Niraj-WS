/*number data type*/


/*number data type is used to represent numerical values such as integers, floating-point numbers, and complex numbers. These data types are used to perform mathematical operations and calculations in programs.  
 Integers( positive, negative, or zero) They are represented the "int" data type  For example, in Python,
  integers can range from (-2^31 to 2^31-1 for 32-bit integers), and (-2^63 to 2^63-1 for 64-bit integers)     */




let foo = 42;
console.log(foo);

f= "hello";

console.log(foo);

// javascript is weekly data typed language, 
// if add int or bool + string then it converts int to string  to concat instead of typeError

console.log(foo+f); // output: 42hello

foo=true;
console.log(foo+"hello"); // output: truehello

// if you add bool and int then it converts bool to int to concat instead of typeError.

let x=32;

let y=true;

console.log(x+y); // output: 33


// bool + int -> int

// bool + string -> string

// int + string -> string


// Premitive data types
// Integers

let u = 5;
let v = 3.14;
let z = Infinity;
let w = NaN; // "Not a Number" value

console.log(u);
console.log(v);
console.log(z);
console.log(w);


// String

let firstName = 'John';
let lastName = "Doe";
let message = "Hello, my name is " + firstName + " " + lastName;

console.log(firstName);
console.log(lastName);
console.log(message);

// Boolean

let isTrue = true; // -> int value is 1
let isFalse = false; // int value is 0

console.log(isTrue);
console.log(isFalse);


// Null 

let n = null;
console.log(n);

// undefined

let a;
console.log(a); // undefined


// Object data types
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
    }
  };
  
console.log(person)
console.log(person.age)
console.log(person.address)

// Function data type


function addNumbers(x, y) {
    return x + y;
}
  
let sum = addNumbers(5, 10);
console.log(sum); // 15
  

console.log(typeof 5); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known issue in JavaScript)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function(){}); // "function"
  