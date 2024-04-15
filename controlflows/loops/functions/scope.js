//Variable scope
//A variable declared inside a function can only be accessed from that function. This is because that variable has a local scope.
/*
function greet() {

  let myString = "Hello World!";
  
  }
  
  greet();
  
  console.log(myString);
  */

  //On the other hand, a variable declared outside of any block is known as a global variable because of its global scope

let myString = "Hello World!";

function greet() {

console.log(myString);

}

greet(); // Hello World!

//Here, the greet() function is able to access the myString variable declared outside of it.
//Keep in mind that this applies only to variables declared using let and const.