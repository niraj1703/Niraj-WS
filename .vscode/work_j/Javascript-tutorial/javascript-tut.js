/* in for loop three statement state 1; state2; state3; 
if first state is true  ("i=0")  but second state is false they will not print  means loop is stop . 
let is a blocked loop , but var globally loop .
you have execute many number through for loop 
      first statement ("i=0") will be execute one time in for loop but state2; and state3 will be execute many times 
      if i = 0 (true) then check second statement if second statement is true  it means (i<5) i is less than five  then ceck third statement (i++); third statement is increment it means print 1
      if you print 1 to 5 console.log (i+1) 

      for (i=0;i<5;i++){ 
        console.log (i)
    }                        output will be : 1,2,3,4,5,*/




    /*  program to add first natural number 
let sum = 0 
let n=prompt ("enter the value of n" )
n = number.parseInt(n)
for ( let i=0; i<n; i++){  // for (var i=0; i<n; i++) 
    sum+= (i+1)
    console.log ( (i+1), "+" )
}
console.log ("sum of first" +n+ "natural numbers is"  + sum )
console.log (i)



let obj ={
    shiv: 50,
    shivika:90,
    ritika:45,
}

for in loop 
for (let a in obj){
    console.log ("marks of" + a + "are" + obj[a])
}

for of loop 
object are itreble (string,array,)
for (let a of "harry"){
    console.log (b)
} */






/*while loop 
 in while loop two statement . first state : if i is less than n then print  other wise thise loop will be false 
second state : if loop is work again then i++ is increment in value  
in codeing i++ will not store in program then loop will be executed many times . they will be not stop .   

let n = prompt("enter your value ") //ask a value from user 
n = Number.parseInt(n) //convert a value in integer to give a value from user 
let i = 0; // value of i is zero 
while (i<n){ // zero is less than n
    console.log (i) //i is zero 
    i++; //increment 
}

 do while loop 
 do while loop is execute at least one time 
first execute then condition check . if condition is true then execute will be second times . 
let n = prompt("enter your value ") 
n = Number.parseInt(n)  
let i = 0; 
do{ 
    console.log (i)
    i++; 
} while (i<n)


function 
basically function work a multitasking program in one line . function is very useful forcode . if i have write a code multitimes in program but i want to write a code in one time and they will be executed . so function are used to separate a logic  
function oneplusavg (x,y){
console.log ("done")
return /*math.round*/ 1+(x+y)/2
let a = 1;
let b = 2;
let c = 3;
console.log ("one plus average of a and b is ",oneplusavg (a,b))
console.log ("one plus average of a and b is ",oneplusavg (a,b))
console.log ("one plus average of a and b is ",oneplusavg (a,b))

const sum =()=>{
    return p + q 
}
console.log (sum (9,7) )

let v = hello();
const hello = ()=>{
    console.log ("hey how are you ")
    return "hi"
}
console.log(v) 






string 
you want to write and know the text number that how many words are in the text(name.length)
you can write the text between this [""]  and this [''] commas.
let friend = 'prakash'
console.log (friend)

 you can't write the text between this ["] and this ['] commas.
let name = "harry"
console.log (name.length) // if you want to know that text number so you will be use this code (name.length)
you can write any one letter in your word so use this code 
let get = "niraj"
console.log (get[0])  // if you want to write a first letter in your word 

template literals 
template literals use backtics instead of quote to define a string  . let nname = `harry` .  with template literals , it is possible to use single as well as double quotes inside a string .. let senytance = `the name "is" harry`s` .. we can insert variables directly in template literals .. this is called string interpolation  ..  let a = this is &{name}
if you want to add a fill in the blanks in sentance so you use to template literals 
let boy1 = "pramod"
let boy2 = "nikhil"
//nikhil is a friend of pramod 
let sentance = `&{boy2} is a friend of &{boy1}`
console.log (sentance)
//escape sequence character 
//we can use single quotes escape sequence to solve this problem
//let name = `adam` d\ `angelo` .. we can use \" inside a string with double quotes */

let name = "harry"
let friend = "naman"
console.log(name.length) //if you want to that how many letters are in word 
console .log (name.toUpperCase())
console.log(toLowerCase())
console.log (name.slice(2,4))
console.log (name.slice(2))
console . log (name.replace())
console.log(name.concate(" is a friend of" ,friend , "ok"))
let friend2 = "          meena       "
console.log (friend2)
console.log (friend2.trim())
let fr = "raman" + "shivika" + "harry" 
console.log(fr[0])
console.log(fr[1])
console.log(fr[3])
console.log(fr[4])
console.log(fr[5])
console.log(fr[6])
console.log(fr[7])
console.log(fr[8])
console.log(fr)


//arrays   

//if you want to add more than one value so you used to array 
let marks_class_12 =[91, 82, 63, 84,false, "not present"]
marks_class_12[6]=89//  adding a new value to the array 
console.log (marks_class_12[0])
console.log (marks_class_12[1])
console.log (marks_class_12[2])
console.log (marks_class_12[3])
console.log (marks_class_12[4])
console.log (marks_class_12[5])
console.log (marks_class_12[6])
console.log (marks_class_12[7])
console.log (marks_class_12.length)
marks_class_12[0]=96 //changing the value of an array
console.log (marks_class_12) 
console.log (typeofmarks_class_12) //if i am print typeof then print will object 

//array methods 

/*let num = [1,2,3,34,4]
let b = num.toString() //convert in string to number 
console.log (b)
let c = num.join("and")
console.log(b)
let r = num.pop()
console.log (num,r)
let r = num.push(56)
console.log (num,r)
let r = num.shift()
console.log (r,num)
let r = num.unshift (78)
console.log (r,num)
let num = [1,2,3,4,5,6,7,8,9]
let num_more = [11,12,13,14,15,16,17,18,19] 
let num_even_more = [231,232,233,234,235,236,237,238,239]
/consol.log (num.length)
delete num [0]
consol.log (num)
consol.log (num.length)
let newArray = num.concate(num_more,num_even_more) 
console.log (newArray)
console.log (num,num_more)*/



sort method

let compare = (a,b)=>{
    return a-b
}
let num = [1,2,3,4,5,6,7,8,9,10]
num.sort (compare)
num.reverse ()
console.log (num)
