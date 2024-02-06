
// Arithmetic operator

/*
+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Modulus (returns the remainder of a division operation)
++  Increment (adds 1 to a variable)
--  Decrement (subtracts 1 from a variable)

*/

let c=3;
let f=4;

console.log(c+f);
console.log (c-f);
console.log(c*f);
console.log(c/f);
console.log(c%2);

// post increment 
console.log(c++); //  print c and then c=c+1
console.log(++c); // c=c+1 and then print c
console.log(f--); // print f and then f=f-1
console.log(--f); // f=f-1 and then print f



/*
Comparison operator

==   // Equal to
!=   // Not equal to
<    // Less than
>    // Greater than
<=   // Less than or equal to
>=   // Greater than or equal to

*/

let m=4;
let n=5;

console.log(m==4);
console.log(m!=n);
console.log(n<m);
console.log(m>n);


// logical operator

/*

&&   // Logical AND
||   // Logical OR
!    // Logical NOT

*/


let t=6;
let v=3;
let u=4;

if(t>3){
    console.log("t is greter than 3");
}

else{
    console.log("t is less or eqal 3");
}

// find smallest number from 3 numbers

if(t<u && t<v){
    console.log('t is smallest number');
}
else if(u<t && u<v){
    console.log('u is smallest number ');
}
else{
    console.log('v is smallest number');
}



// Assignment operator 

let r = 5;
r += 2; // equivalent to r = r + 2
console.log(r); // Output: 7 (Addition assignment operator)

let s = 10;
s *= 2; // equivalent to s = s * 2
console.log(s); // Output: 20 (Multiplication assignment operator)



// Bitwise operator

let e = 5;  // Binary: 00000000000000000000000000000101
let d = 3;  // Binary: 00000000000000000000000000000011

console.log(e & d);  // Output: 1 (Bitwise AND: 00000000000000000000000000000001)
console.log(e | d);  // Output: 7 (Bitwise OR: 00000000000000000000000000000111)
console.log(e ^ d);  // Output: 6 (Bitwise cOR: 00000000000000000000000000000110)
console.log(~e);     // Output: -6 (Bitwise NOT: 11111111111111111111111111111010)
console.log(e << 1); // Output: 10 (Left shift: 00000000000000000000000000001010)
console.log(e >> 1); // Output: 2 (Sign-propagating right shift: 00000000000000000000000000000010)
console.log(e >>> 1);// Output: 2 (Zero-fill right shift: 00000000000000000000000000000010)


// Ternary operator

var age = 20;
var message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message);




/*operator precidence


Operator                       Description
--------------------------------------------------------------------
()                             Grouping
. []                           Member access
() []                          Function call, array subscripting
++ --                          Postfix increment, decrement
! ~ + - typeof                Unary operators
**                             Exponentiation
* / %                          Multiplication, division, remainder
+ -                            Addition, subtraction
<< >> >>>                      Bitwise shift
< <= > >=                      Relational operators
== != === !==                  Equality operators
&                              Bitwise AND
^                              Bitwise XOR
|                              Bitwise OR
&&                             Logical AND
||                             Logical OR
?:                             Conditional (ternary) operator
= += -= *= /= %= <<= >>= ...   Assignment operators
,                              Comma operator


*/



var result = 2 + 3 * 4;  // Multiplication is evaluated first, then addition
console.log(result);    // Output: 14

var value = (2 + 3) * 4;  // Parentheses override precedence
console.log(value);      // Output: 20

var x = 10;
var y = 5;
var z = x > y && x !== y;  // Relational and logical operators
console.log(z);           // Output: true

