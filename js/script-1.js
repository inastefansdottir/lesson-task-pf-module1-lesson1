console.log("This is for module 1");

// Lesson task 2 module 1 questions
// question 1 answer
let integer = 8;
let decimal = 1.5;

// question 2 answer
var workingDays =
  "Monday" +
  " - " +
  "Tuesday" +
  " - " +
  "Wednesday" +
  " - " +
  "Thursday" +
  " - " +
  "Friday";
console.log("Working Days: ", workingDays);

// question 3 answer
let addition = 3 + 2;
let subtraction = 7 - 1;
let multiplication = 6 * 4;
let division = 9 / 3;
let remainder = 5 % 2;

// question 4 answer
var onSale = false;
console.log(onSale);

// question 5 answer
var frogsText = "The frogs are angry";
console.log(frogsText.length);

// question 6 answer
var timeElapsed;
var totalPrice;

// question 7 answer
var number1 = "53";
var number2 = "44.6";

let convertedNumber1 = parseInt(number1);
console.log(convertedNumber1);

let convertedNumber2 = parseFloat(number2);
console.log(convertedNumber2);

let total = convertedNumber1 + convertedNumber2;
console.log(total); // 97.6

// question 8 answer
var pet = "donkey";
console.log(typeof pet); // string

var age = 89;
console.log(typeof age); // number

var discountApplied = true;
console.log(typeof discountApplied); // boolean

var timeLeft;
console.log(typeof timeLeft); // undefined

// question 9 answer
var headingText = "Updating heading";

var heading = document.querySelector("h1");
heading.innerHTML = headingText;

// question 10 answer
var body = document.querySelector("body");
body.style.backgroundColor = "lightskyblue";

// Lesson task 3 module 1 questions
// question 1 answer
var firstNumber = 34;
var secondNumber = 89;

if (firstNumber <= secondNumber) {
  console.log("The first number is smaller than the second");
} else {
  console.log("The first number is bigger than the second");
}

// question 2 answer
var age = 11;
var minimumAge = "13";

if (age >= parseInt(minimumAge)) {
  console.log("Minimum age met");
} else {
  console.log("Minimum age is not met");
}

// question 3 answer
var income = "11.050";
var maximumIncome = "13.075";

if (parseFloat(income) >= parseFloat(maximumIncome)) {
  console.log("Maximum income requirement met");
} else {
  console.log("Maximum income requirement is not met");
}

// question 4 answer
var colour = "blue";

if (colour === "orange") {
  console.log("This colour is a bit rubbish");
}

// question 5 answer
var invoicePaid = false;

if (invoicePaid === true) {
  console.log("Invoice has been paid");
} else {
  console.log("Invoice has not been paid");
}

// or
if (invoicePaid === false) {
  console.log("Not paid");
}

// question 6 answer
var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber)) {
  console.log("You lose again");
}

// question 7 answer
var dayOfTheWeek = 2;
var dayName;

switch (dayOfTheWeek) {
  case 1:
    dayName = "Monday";
    break;

  case 2:
    dayName = "Tuesday";
    break;

  case 3:
    dayName = "Wednesday";
    break;

  case 4:
    dayName = "Thursday";
    break;

  case 5:
    dayName = "Friday";
    break;

  case 6:
    dayName = "Saturday";
    break;

  case 7:
    dayName = "Sunday";
    break;

  default:
    dayName = "Invalid day number";
    break;
}

console.log(dayName);
