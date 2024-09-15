
// _______________Part 1: Refactoring Old Code________________

let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


let cell = ``;
let row = ``;


for (let i in string) {
  //For index in string
  if (string[i] == ",") {
    row = row + cell + " "; // Add cell to row
    cell = ``; // Emtying cell to reuse
  } else if (string[i] == "\n") {
    row += cell; // Add final cell to row
    cell = ``; // Clear cell
    console.log(row); // Print row
    row = ``; // Clear row
  } else {
    cell += string[i]; 
  }

  //If we reach final character in string, print final row
  if (i == string.length - 1) {
    console.log(row); // Print row
  }
}
