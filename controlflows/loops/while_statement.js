//The while statement or while loop is used to run a block of code as long as the condition evaluates to true.
/*
while (condition) {

  statement;
  
  }
  */
/*
let i = 0;

while (i <=6) {

console.log(`The value of i = ${i}`);

i++;

}
*/

let flips = 0;

let isHeads = false;

while (!isHeads) {

flips++;

isHeads = Math.random() < 0.5;

}

console.log(`It took ${flips} flips to land on heads.`);