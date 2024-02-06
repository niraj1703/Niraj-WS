/*for loop : is execute a code specified number of times . is called for loop statement 
first  it check the initialization is true 
  and check the condition also will be the true 
 then check the increment and then will be execute
 for loop*/

 /*i is execute the five times 0 to 5*/
for (let i = 0; i < 5; i++) {
  console.log(i);
}

/*while loop: while loop is used to execute a code as long as  condition is true.
then while loop is execute*/ 
let i = 0;
while (i < 5) /*condition*/ {
  console.log(i);
  i++;
}


/*do-while loop is first execute then  check the condition if condition is true 
then do while loop will be execute*/ 

console.log("do while loop");

i = 11;
do{
    console.log(i)
    i--;
}while(i > 0)



for (let i=0; i<=10; i++){
  console.log(i);
  if (i==5){
    break;
  }

}


let x=5;
while(true){
x++;
if (x%2==0){
  continue;
}
console.log(x)

if (x>10){
  break;
}

}


// Nested Loop

for (let i=0;i<10;i++){

  var pattern = '';
  for (let j=0;j<10;j++){
    pattern += '* ';
  }
  console.log(pattern);
}