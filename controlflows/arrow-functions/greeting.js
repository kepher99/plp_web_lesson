const greetings = (name) => {

  console.log(`Hello, ${name}!`);
  
  };
  
  greetings("John"); // Hello, John!

  /*When you use the function keyword, you need to use the curly brackets {} and the return keyword as follows:

function plusTwo(num) {

return num + 2;

}*/ 

//Using the arrow function, you can omit both the curly brackets and the return keyword, creating a single line function as shown below:

const plusTwo = (num) => num + 2;

//The arrow function syntax also works for a function that doesn't return a value as shown below:

const greeting = () => console.log("Hello World!");
greeting();

//When using the arrow function syntax, the curly brackets are required only when you have a multiline function body:

const greets = () => {

  console.log("Hello World!");
  
  console.log("How are you?");
  
  };

  greets();
