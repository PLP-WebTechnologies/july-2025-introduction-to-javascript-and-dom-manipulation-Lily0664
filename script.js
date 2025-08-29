// Part 1: Variable Declarations and Conditionals
let age = 20;
let name = "Lily";
let isStudent = true;

// Conditional example
if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is not an adult.");
}

if (isStudent) {
    console.log(name + " is a student.");
} else {
    console.log(name + " is not a student.");
}

// Part 2: Custom Functions
// Function 1: Greet user
function greetUser(userName) {
    return "Hello, " + userName + "!";
}

// Function 2: Calculate square
function squareNumber(num) {
    return num * num;
}

console.log(greetUser(name));
console.log("The square of 5 is: " + squareNumber(5));

// Part 3: Loop Examples
// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration: " + i);
}

// Loop 2: Array forEach
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit) {
    console.log("Fruit: " + fruit);
});

// Part 4: DOM Interactions
// 1. Change the main title when button is clicked
const changeTitleBtn = document.getElementById("changeTitleBtn");
changeTitleBtn.addEventListener("click", function() {
    document.getElementById("main-title").textContent = "Title Changed!";
});

// 2. Display output in the #output div
const outputDiv = document.getElementById("output");
outputDiv.textContent = greetUser(name) + " You are " + age + " years old.";

// 3. Populate the itemList with fruits
const itemList = document.getElementById("itemList");
fruits.forEach(function(fruit) {
    const li = document.createElement("li");
    li.textContent = fruit;
    itemList.appendChild(li);
});

// End of assignment
