//This piece of code defines a function called sum.
// means that you can now call sum(1, 3) which returns 4.
//You can run it again with different values, such as sum(2, 5) and it will return the result of 2 + 5 which is 7.

function sum(x, y) {
    return x + y;
}

//Returning the result


//In JavaScript, you have to return from inside functions. If you forget to write return, your function will return undefined.

//The return keyword will also quit/exit the function.

function sum(x, y) {
    return x + y;
    console.log("Hello World"); // this will NEVER run
}

//The return keyword will quit the function with the result (which is x + y), so the code afterward will never run!

//Basic sum

//Complete the function sum such that it returns the sum of a and b.

function sum(a, b) {
    let sum = a+b 
return a+b;
}

// sample usage - do not modify
console.log(sum(1, 3)); // output 4
console.log(sum(2, 5)); // output 7

//Basic multiplication

//Complete the function multiply such that it returns the product (the result of multiplication) of a and b.

function multiply(a, b) {
    let multiply= (a*b)
    return multiply
    }
    
    // sample usage - do not modify
    console.log(multiply(2, 4)); //output 8
    console.log(multiply(3, 2)); //output 6
    
    //You can create a string in JavaScript by using the double quotes (") or single quotes (').

    //Here's an example:
    
    "This is a string";
    'This is another string!'




                               //String property

// The .length property is used to return the length of the string.
//getting the length of "Nice!":
"Nice!".length;
 //5
 //you have a variable called text, here's how you'd get its length:
 let text = "Hello World";
 text.length; // 11

                          // Basic String methods
                            
                              toLowerCase()
//This will return a new string that has all of its characters in lower case:
let sentence = BLUE 
console.log(BLUE.toLowerCase())      //"BLUE".toLowerCase();"blue";
//Note that .length should not have () after it because it is a property (a value that has already been computed). Whereas .toLowerCase() is a method that requires the () because it's an action that you are performing.
                              
                                toUpperCase()
//This will return a new string that has all of its characters in upper case:
let sentance = red 
console .log (red.toUpperCase())             //"red".toUpperCase(); // "RED";



                              //Visualize a variable (or expression)
//When solving challenges feel free to use console.log() to visualize a variable or expression. It will show up in the console tab.
/*function sum(a, b) {
    console.log(a);
    console.log(a + b);
    return a + b;
}*/
// Sample usage
sum(1, 3);
//you will see 1 then 4 logged to the console because of the console.log(a) and console.log(a + b).
//Note that console.log() is NOT a replacement for return. You still have to return after the console.log.

                                    //String length

//Complete the function getCharCount such that it returns the number of characters in the str parameter that it receives.
   getCharCount(str); {
    let get = str;
    return ram.length 
   }
    
    // Sample usage - do not modify
    console.log(getCharCount("Sam")); // 3
    console.log(getCharCount("Alex 123")); // 8
    console.log(getCharCount("Charley is here")); // 15

                        //  Shout my name

   // Complete the function shoutMyName such that it returns the name parameter it receives all in upper case.
function shoutMyName(name) {
let My= name
return My. toUpperCase ();
}

// Sample usage - do not modify
console.log(shoutMyName("Sam")); // "SAM"
console.log(shoutMyName("Charley")); // "CHARLEY"
console.log(shoutMyName("alex")); // "ALEX"

//Lower case string

//Complete the function lowerName such that it returns the name parameter it receives all in lower case.
function lowerName(name) {
    let My = name 
    return My.toLowerCase();
    }
    
    // Sample usage - do not modify
    console.log(lowerName("Sam")); // "sam"
    console.log(lowerName("ALEX")); // "alex"
    

                         // Character access 
  //You can access a specific character in a string by using the square brackets syntax [].
  //You have to provide the index of the character that you'd like to access, starting from 0.

  const language = "JavaScript";

language[0]; //first character
language[1]; //second character
language[2]; //third character
//If you'd like to debug your code and see the result of language[1] in the console, you have to console log it as follows:
console.log(language[1]);

//Combining it with length

//You can also combine the character access with the .length property. So using the same language variable, here's how you get the second to last character from it:


//const language = "JavaScript";

language[ language.length - 2 ]; // "p" because it's the second to last character from "JavaScript"

//Note that language[ language.length ] will be undefined because character access starts at 0.


//The .at(index) method

//Since 2022, JavaScript now has a .at() method that reads the character at a certain index, which can also be negative.

//Let's take a look at a few examples:

//const language = "JavaScript";
language.at(0); // "J"
language.at(1); // "a"
language.at(-1); // "t"
language.at(-2); // "p"

//The primary use case for the .at() method is negative indices, making it easier than relying on the .length property. However, you can use whichever approach you prefer.

//When a negative index is specified, you start counting from the end. -1 is the last character, -2 is the one before it, etc.

//You can continue using the square bracket syntax for all other use cases, knowing that language[-1] returns undefined. So, whenever you want to use a negative index, you should use the .at() method.


JSDoc
//By now, you probably noticed that most of the challenges start with some comments that look like this:

/**
 * @param {string} name
 */


//Get first character
//Complete the function getFirstCharacter such that it returns the first character of the name parameter it receives.

function getFirstCharacter(name) {
    let First = name 
    return First[0]
    }
    
    // Sample usage - do not modify
    console.log(getFirstCharacter("Amsterdam")); // "A"
    console.log(getFirstCharacter("Japan")); // "J"
   
    //Get last character

   // Complete the function getLastCharacter such that it returns the last character of the name parameter it receives.  

   function getLastCharacter(name) {
    let First = name 
    return First.at(-1);
    }
    
    // Sample usage - do not modify
    console.log(getLastCharacter("Sam")); // "m"
    console.log(getLastCharacter("Alex")); // "x"
    console.log(getLastCharacter("Charley")); // "y"
    
    Substrings 
  //  A substring is a part or a portion of a string. For example, "rain" is a substring of the string "brain" because you can get "rain" by taking the last 4 characters.

  //  When working with strings, you often need to get a few characters of a string rather than all of it. Thus we use the substring method.

  //Substring signature

 // A function signature gives you an explanation of the parameters that you need to pass for that method. Let's take a look at the signature of substring:


 //someString.substring(indexStart, indexEnd)
 //This means that when you call substring, you can give it 2 parameters, the first one for the indexStart and the second one for indexEnd.

// indexStart: the position of the first character you'd like to include
//indexEnd: the position of the first character you'd like to ignore


//This means an indexEnd of 5, will only include up to the character at position 4.

//The combination of these 2 will give you a substring.

//Let's take an example with a variable named language with a value JavaScript, and let's get the substring with indexStart of 1 and indexEnd of 4. This will return a string made up of all the characters from positions 1 to 3 because 4 is the first character that is ignored:

//Here's how you'd write it in JavaScript:

//const language = "JavaScript";
language.substring(1, 4); //"ava"

//Optional parameters
//The indexEnd parameter is optional, which means you can pass the indexStart and it'll assume the indexEnd to be the same as the string length. Here's an example:

//language.substring(4); //"Script"
//It assumed that the indexEnd is the length of the string (10 in this example).

//Skip first character

//Complete the function skipFirstCharacter such that it returns all the characters except the first one from the text parameter it receives.
function skipFirstCharacter(text) {
    let skip = text 
    return skip.substring(1);
    }
    
    // Sample usage - do not modify
    console.log(skipFirstCharacter("Xcode")); // "code"
    console.log(skipFirstCharacter("Hello")); // "ello"
    
