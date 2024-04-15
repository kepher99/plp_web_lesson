function printArguments(...args){

  console.log(args);
  
  }
  
  //When calling the printArguments() function above, you can specify as many arguments as you want:
  
  function printArguments(...args){
  
  console.log(args);
  
  }
  
  
  
  printArguments("A", "B", "C");
  
  // [ 'A', 'B', 'C' ]
  
  printArguments(1, 2, 3, 4, 5);
  
  // [ 1, 2, 3, 4, 5 ]