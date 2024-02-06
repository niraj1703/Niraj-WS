/*this is if statement
if statement is give a true 
it means the condition is (if statement)
if the hour is less than 12, then output will be (good morning)*/
let hour=13

if (hour < 12) {
    greeting = "Good morning";
  }

/*this is else if statement
if the condition1 is false 
it means the condition is (if else statement)
if the hour is greater than 12, then output will be (good afternoon)*/
   else if (hour > 12){
    greeting = "good afternoon";
  } 

/*this is else statement
if the cond1 cond2 both are false 
it means the condition is ( else statement)
if the hour is equal to 4, then output will be (good evening)*/
else 
{
    greeting = "Good eveening";
  } 

/*
switch statement
                  */
let day = 6;

switch (day) {
    case 1:
       console.log ("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid day");
}


