// ### Exercise 1:
// - Ask the user to enter two numbers
let userNumber1=prompt("Please enter a number:");
let userNumber2=prompt("Please enter another number:");
// - Create a function that takes two numbers and returns the sum
function addNumbers(num1,num2){
    return(num1+num2);
    console.log(`the sum of ${userNumber1} and ${userNumber2} is ${addNumbers(userNumber1,userNumber2)}`)
}
let num1=userNumber1;
let num2=userNumber2;
let sum=addNumbers(userNumber1,userNumber2);
console.log(sum);
// - Print the sum of the numbers the user entered to the console using the function you created
