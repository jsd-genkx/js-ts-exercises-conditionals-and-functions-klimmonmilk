// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = NaN;
// Try changing to "hello", 10, null, NaN

// in class solution

if (typeof userInput === 'number' && !isNaN(userInput)){
    console.log(`T :${userInput} <- This is Number`);
} else {
    console.log(`F :${userInput} <-This is not number /is NaN`);
};

// My solutionnnnn 1

// if (Number.isNaN(userInput)) {
//     console.log("it's not a number");
// } else if (typeof userInput === "number") {
//     console.log("It's a number");
// } else { 
//   console.log("It's not a number")
// };



// My solutionnnnn 2

// if  (Number.isNaN(userInput)) { // ถ้าไม่เอา nan ขึ้นก่อนมันจะกลายร่างเป็น number
//     console.log("It's NaN");
// } else if (typeof userInput === "number") {
//     console.log("It's a number");
// } else if (typeof userInput === "string") {
//     console.log("It's a string");
// } else if (userInput === null) {
//     console.log("It's null");
// };


// nan กลายร่างเป็น number เฉยเล้ย

// if  (typeof userInput === "number") {
//     console.log("It's a number");
// } else if (typeof userInput === "string") {
//     console.log("It's a string");
// } else if (userInput === null) {
//     console.log("It's null");
// } else if (Number.isNaN(userInput)) {
//     console.log("It's NaN");
// };