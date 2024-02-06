/*object is created a property by {}curly braces
consists of a key-value pair,  the key is a string
 and any data type 
  (objectName.propertyName) or bracket notation (objectName['propertyName']) */ 
var person = {
    name: "John",
    age: 30,
    city: "New York",
    sayHello: function() {
      console.log("Hello, I'm " + this.name + "!");
    }
  };
  console.log(person.name); // Output: John
  console.log(person['age']); // Output: 30
  person.sayHello(); // Output: Hello, I'm John!
  person.email = "john@example.com"; // Adding a new property
  person.age = 31; // Modifying an existing property
  delete person.city; // Deleting a property
  

 




