let birds = ['Owl', 'Eagle', 'Parrot', 'Falcon'];
birds[2] = 'Vulture';

//Special methods for array manipulation
birds.push('Sparrow');

//Another method called pop() can be used to remove an item from the end of an array:
birds.pop();

//The unshift() method can be used to add an item from the front at index 0:
birds.unshift('ostrich');

//The indexOf() method can be used to find and return the index of an item in the array.
//The method will return -1 when the item isn't found inside the array:
let pos = birds.indexOf('Eagle');



//console.log(birds[0]); 

//console.log(birds[1]);

console.log(birds);
console.log(pos);


