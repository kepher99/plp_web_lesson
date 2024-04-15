function greet(weather,name = "Nathan") {

  console.log(`Hello, ${name}!`);
  console.log(`It's ${weather} today, right?`);
  
  console.log("Nice weather today, right?");
  
  }

  greet('rainy');

  //To pass an argument to the weather parameter, we need to pass undefined or any value for the name parameter first.

//This is why it's better to specify non-default parameters in front of default parameters.