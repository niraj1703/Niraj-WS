/*
function declaration 
    */
let name="dhiraj"

function greet(name) {
    console.log("Hello, " + name + "!");
}

/*   Function Expression:
                               */ 


greet("niraj");

console.log("Function category");


function noParaNoReturn(){
    console.log("No Parameter no return function")
}


noParaNoReturn();

function paramNoReturn(name){
    console.log(name);
}

paramNoReturn("niraj");

function paramReturn(name){
    
    message = "My name is " + name
    return message;
}

result=paramReturn("niraj");

console.log(result);


function noParaReturn(){
    return "No Param return function"
}

result=noParaReturn();

console.log(result);

function withDefaultParam(name="niraj"){
    return name;
}

console.log(withDefaultParam("dhiraj"));




