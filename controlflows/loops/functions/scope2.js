// you can also define a local variable with the same name as the global variable without overwriting it.

//Any variable declared outside a function shouldn't be used inside a function without passing them as parameters.
//A variable declared inside a function should never be referred to outside of that function

let myString = "Hello World!";

function greet() {

let myString = "Morning!";

console.log(myString);

}

greet(); // Morning!

console.log(myString); // Hello World!