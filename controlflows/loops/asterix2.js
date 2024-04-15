// Define the number of rows in the pyramid
const numberOfRows = 5;

// Loop through each row in reverse order
for (let i = numberOfRows; i >= 1; i--) { // Outer loop iterates from numberOfRows down to 1
    let row = ''; // Initialize an empty string to hold the characters of the current row

    // Add '*' to the row 'i' times
    for (let j = 1; j <= i; j++) { // Inner loop adds '*' to the row i times
        row += '*'; // Concatenate '*' to the current row
    }

    // Print the row
    console.log(row); // Output the current row
}
