// Define a function to calculate the area and perimeter of a square
function calculateSquare(side) {
  // Calculate the area of the square (side * side)
  let area = side * side;
  // Calculate the perimeter of the square (4 * side)
  let perimeter = 4 * side;
  
  // Return an object containing the side length, area, and perimeter
  return { side: side, area: area, perimeter: perimeter };
}

// Example usage:
// Call the calculateSquare function with a side length of 5
let result = calculateSquare(5);

// Log the side length, area, and perimeter of the square to the console
console.log("Side:", result.side);
console.log("Area:", result.area);
console.log("Perimeter:", result.perimeter);
