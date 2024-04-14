let color = ['red', 'green', 'blue'];

//First, add a 'black' color after the last index of the array. Then print the array.
color.push('black');

//Next, remove the value 'red'
color.shift();

//swap the position of 'green' and 'blue'
color[0] = 'blue';
 color[1] = 'green';

 // add the color 'yellow' on the first index of the array
 color.unshift('yellow');

console.log(color);