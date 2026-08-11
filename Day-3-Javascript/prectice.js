/*variables*/

let name = "Mantsha";

const university = "Dr. C.V. Raman University";

console.log(name);
console.log(university);

/*Data types*/

let StusdentName = "Mantsha"; //string

let age = 20; //number

let isStudent = true; //boolean

let Skills = ["HTML", "CSS", "JavaScript"]; //array

let address = { city: "Sanawad", state: "Madhya Pradesh" }; //object

console.log(StusdentName);
console.log(age);
console.log(isStudent);
console.log(Skills);
console.log(address);

/*Operators*/

let a = 10;
let b = 5;

let sum = a + b; //addition
let difference = a - b; //subtraction
let product = a * b; //multiplication
let quotient = a / b; //division
let remainder = a % b; //modulus

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

/*Conditional Statements*/

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

/*Loops*/

for (let i = 0; i < 5; i++) {
    console.log([i]);
} 

/*********Program-1*********************/

function greet(name){
    return " Hello," + name + " Welcome to JavaScript!";

}
console.log(greet("Mantsha"));

/***********Program-2*********************/

function sumArray(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(sumArray([10, 20, 30, 40]));

/***********Program-3*********************/
const applicants = [
    { name: "Mantsha", amount: 15000 },
    { name: "Disha", amount: 35000 },
    { name: "Manish", amount: 27000 }
];

function getMaxAmount(data) {
    let max = data[0];

    for (let i = 1; i < data.length; i++) {
        if (data[i].amount > max.amount) {
            max = data[i];
        }
    }

    return max;
}

console.log(getMaxAmount(applicants));
