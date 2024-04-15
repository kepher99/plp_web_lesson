/*
// Define the number of rows in the pyramid
const numberOfRows = 5;

// Loop through each row
for (let i = 1; i <= numberOfRows; i++) {
    let row = '';

    // Add '*' to the row 'i' times
    for (let j = 1; j <= i; j++) {
        row += '*';
    }

    // Print the row
    console.log(row);
}
*/

// Define the number of rows in the pyramid
const numberOfRows = 5;

let i = 1; // Initialize the variable 'i' to 1 before entering the outer while loop

// Loop through each row
while (i <= numberOfRows) { // Outer while loop iterates from 1 to numberOfRows
    let row = ''; // Initialize an empty string to hold the characters of the current row
    let j = 1; // Initialize the variable 'j' to 1 before entering the inner while loop

    // Add '*' to the row 'i' times
    while (j <= i) { // Inner while loop adds '*' to the row i times
        row += '*'; // Concatenate '*' to the current row
        j++; // Increment the variable 'j' to control the inner loop
    }

    // Print the row
    console.log(row); // Output the current row
    i++; // Increment the variable 'i' to move to the next row
}

