//The for loop is useful when you know how many times you need to execute a repetitive task

//for (let x = 0; x <= 10; x++) {

  //console.log(x);
  
 // }

 // for ( [initialization]; [condition]; [arithmetic expression]) {

    // As long as condition returns true,
    
    // This block will be executed repeatedly
    
  // }

  //for (let x = 1; x < 20; x += 3) {

    //console.log(x);
    
   // }

let heads = 0;

let tails = 0;

for (x = 1; x <= 10; x++) {

if (Math.random() < 0.5) {

tails++;

} else {

heads++;

}

}

console.log("Tossed the coin ten times");

console.log(`Number of heads: ${heads}`);

console.log(`Number of tails: ${tails}`);