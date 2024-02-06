/*A string is a characters that is represent to text store and manipulate a text data 
string can be made up of letters, numbers, symbols, and whitespace characters. 
 string will be used to  single quotes (' ') or double quotes (" ").   
 
 The length property returns the length of a string: */
 let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //string
 let length = text.length;

 /* takes 2 parameters: start position, and end position (end not included).
 Slice out a portion of a string from position 7 to position 13:
 slice()  Slice out a portion of a string from position 7 to position 13:*/
text = "Apple, Banana, Kiwi";

 let part = text.slice(7, 13); // output: string start from text[7] to text [12]
 
/*template literals are enclosed in backticks ( ) 
The expressions to be interpolated are enclosed in curly braces ({}) and preceded by a dollar sign ($).*/
const name = 'John';
const age = 25;
console.log(`My name is ${name} and I'm ${age} years old.`);

//Escape sequece character
//Escape sequences are commonly used to represent characters it is a special meaning in the language

//such as quotation marks, newlines, or backslashes.

//escape sequence characters are:
/*
\n: Newline character
\t: Tab character
\": Double quote character
\': Single quote character
\\: Backslash character
*/
const message = "She said, \"Hello!\"";
console.log(message);
