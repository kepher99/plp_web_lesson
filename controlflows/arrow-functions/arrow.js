//How to convert a normal function to an arrow function easily
//You can follow the three easy steps below to convert a normal function to an arrow function:
/*
Replace the function keyword with the variable keyword let or const
Add = symbol after the function name and before the round brackets
Add => symbol after the round brackets
The code below will help you to visualize the steps:
*/

/*
function plusTwo(num) {

return num + 2;

}

// step 1: replace function with let / const

const plusTwo(num) {

return num + 2;

}

// step 2: add = after the function name

const plusTwo = (num) {

return num + 2;

}

// step 3: add => after the round brackets

const plusTwo = (num) => {

return num + 2;

}

*/

//The three steps above are enough to convert any old JavaScript function syntax to the new arrow function syntax.