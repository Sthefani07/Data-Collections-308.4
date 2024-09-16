
// _______________Part 1: Refactoring Old Code________________

// let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


// let cell = ``;
// let row = ``;


// for (let i in string) {
//   //For index in string
//   if (string[i] == ",") {
//     row = row + cell + " "; // Add cell to row
//     cell = ``; // Emtying cell to reuse
//   } else if (string[i] == "\n") {
//     row += cell; // Add final cell to row
//     cell = ``; // Clear cell
//     console.log(row); // Print row
//     row = ``; // Clear row
//   } else {
//     cell += string[i]; 
//   }

//   //If we reach final character in string, print final row
//   if (i == string.length - 1) {
//     console.log(row); // Print row
//   }
// }





//___________________PART 2  Expanding Functionality_________________________

// Declare a variable that stores the number of columns in each row of data within the CSV.
// let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

// // Instead of hard-coding four columns per row, expand your code to accept any number of columns. 
// // This should be calculated dynamically based on the first row of data.
// let rows = [];
// let columns = [];
// let single_word = "";

// for (let i = 0; i<= string.length; i++){
//     const char = string[i] || "\n";
//     if (char === "," || char === "\n"){
//         columns.push(single_word.trim());
//         single_word = " ";
//         if (char === "\n" || i === string.length){
//             rows.push(columns);
//             columns = [];
//         } 
//     } else {
//             single_word += char;
//         }
// }
// console.log(rows);


// ________________PART 3 Transforming Data ________________________

// For each row of data in the result array produced by your code above, 
//create an object where the key of each value is the heading for that value’s column.
let list = [
  [ 'ID', 'Name', 'Occupation', 'Age' ],
  [ '42', 'Bruce', 'Knight', '41' ],
  [ '57', 'Bob', 'Fry Cook', '19' ],
  [ '63', 'Blaine', 'Quiz Master', '58' ],
  [ '98', 'Bill', 'Doctor’s Assistant', '26' ]
];
// // Convert these keys to all lowercase letters for consistency.
let headers = list[0].map(header => header.toLowerCase());
// Store these objects in an array, in the order that they were originally listed.
let objects = [];

// Since the heading for each column will be stored in the object keys, 
//you do not need to create an object for the heading row itself.
for(let i = 1; i < list.length; i++){
    let row = list[i];
    let obj = {};
    for (let j = 0; j <headers.length; j++){
        obj[headers[j]] = row[j];
    }
    objects.push(obj);
}

console.log(objects);


//_____________PART 4 : Sorting and Manipulating Data______________

//Remove the last element from the sorted array.
list.pop();
// Insert the following object at index 1:
list.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25"});



// Add the following object to the end of the array:
list.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

let group_age = 0;
let count = 0;

for (let item of list){
    if (typeof item === 'object' && !Array.isArray(item) && item.age){
        group_age += parseInt(item.age);
        count++;
    }
}

let average_age = group_age / count;

console.log(list);
console.log(`Average age :`, average_age);



// _____________PART 5  ________________

let csv_format = list[0].join(",") + "\n";

for (let item of list.slice(1)){
    if (Array.isArray(item)){
        csv_format += item.join(",") + "\n";
    }else {
        csv_format += `${item.id},${item.name},${item.occupation},${item.age}\n`;
    }
}

console.log(csv_format)