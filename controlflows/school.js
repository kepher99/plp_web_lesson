/*let grade = 'D';

if (grade === 'A'){
  console.log('You got an A, so here is a Chocolate for you!');
}else if(grade === 'B'){
  console.log('You got a B, here is a Cookie for you!');
}else if(grade === 'C'){
  console.log('You got a C, there is room for improvement and here is your Candy!');
}else{
  console.log('You Failed');
}*/

let grade = 'A';

switch(grade){
  case 'A':
  console.log('You got an A, so here is a Chocolate for you!');
  break;

  case 'B':
  console.log('You got a B, here is a Cookie for you!');
  break;

  case 'C':
  console.log('You got a C, there is room for improvement and here is your Candy!');
  break;

  default:
  console.log('You Failed');
}