//A function can also have a return statement inside the code block. A return statement is used to return a value back to the caller.

/*
function sum(a, b) {

  return a + b;
  
  }
  
  let result = sum(3, 2);
  
  console.log(result); // 5
  */

  function checkAge(age) {

    if (age > 18) {
    
    return "You may get a car license";
    
    }
    
    return "You may not get a car license yet";
    
    }
    
    console.log(checkAge(20));
    
    console.log(checkAge(15));