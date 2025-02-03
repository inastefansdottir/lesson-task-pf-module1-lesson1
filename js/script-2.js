console.log("This is for module 2");

// lesson task 2 module 2 questions
// question 1
var winningNumbers = [1, 76, 2, 78, 16, 7];
var thirdItem = winningNumbers[2];

console.log(thirdItem);

// question 2
var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

vegetables.push("cucumber");

var itemCount = vegetables.length;

console.log(itemCount); // 6

// question 3
var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (let i = 0; i < randomThings.length; i++) {
  let randomThing = randomThings[i];
  console.log(randomThing, i);
}

// question 4
var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i = 0; i < moreThings.length; i++) {
  var typeOfItem = typeof moreThings[i];

  if (typeOfItem === "number") {
    console.log(moreThings[i]);
  }
}

// question 5
var ingredients = ["water", "flour", "toothpaste", "fish lips"];

let result = ingredients.sort();

for (let i = 0; i < ingredients.length; i++) {
  console.log(result[i]);
}

// question 6
var characters = [
  "Gob",
  "Micheal",
  "George Michael",
  "Lindsay",
  "Buster",
  "Maeby",
  "Tobias",
  "Lucille",
];

for (let i = 0; i < characters.length; i++) {
  if (i % 2 === 1) {
    console.log(characters[i]);
  }
}

// lesson task 3 module 2 questions
// question 1
var product = {
  name: "Chicken feet",
  price: 149.99,
};

console.log(product.price);

// question 2
var animals = [
  {
    type: "cat",
    colour: "black",
  },
  {
    type: "elephant",
    colour: "grey",
  },
  {
    type: "dog",
    colour: "brown",
  },
  {
    type: "zebra",
    colour: "black and white",
  },
];

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  console.log(animal.colour);
}

// question 3
var dinnerOptions = [
  {
    name: "Fish and Dips",
    price: 11.95,
    onSpecial: true,
  },
  {
    name: "Bacon and Frogs",
    price: 12.99,
    onSpecial: false,
  },
  {
    name: "Mince Flies",
    price: 19.0,
    onSpecial: true,
  },
];

for (let i = 0; i < dinnerOptions.length; i++) {
  if (dinnerOptions[i].onSpecial === true) {
    console.log(dinnerOptions[i].name);
  }
}

// question 4
var people = [
  {
    firstName: "Burt",
    lastName: "Smacharach",
    age: 35,
  },
  {
    firstName: "Elvis",
    lastName: "Deadly",
    age: 55,
  },
  {
    firstName: "Susan",
    lastName: "Sarongson",
    age: 42,
  },
  {
    firstName: "Big",
    lastName: "Gabe",
    age: 20,
  },
];

for (let i = 0; i < people.length; i++) {
  var age = people[i].age;
  var fullName = people[i].firstName + " " + people[i].lastName;

  if (age >= 20 && age <= 50) {
    console.log(fullName);
  }
}

// question 5
var products = [
  {
    name: "Elephant eggs",
    price: 45.0,
  },
  {
    name: "Bucket of water",
    price: 459.99,
  },
  {
    name: "4 cabbages",
    price: 500.95,
  },
];

// select the ul element
var productContainer = document.querySelector("ul");

for (var i = 0; i < products.length; i++) {
  productContainer.innerHTML +=
    "<li>" + products[i].name + " - " + products[i].price + "</li>";
}

// Lesson task 4 module 2 quesions
// question 1
function text() {
  console.log("What the func is this nonsense?");
}

text();

// question 2
function logName(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  console.log(fullName);
}

logName("Randolph", "Reindeer");

// question 3
function multiply(firstNumber, secondNumber) {
  var typeOfFirst = typeof firstNumber;
  var typeOfSecond = typeof secondNumber;

  if (typeOfFirst !== "number" || typeOfSecond !== "number") {
    return "Please supply number values";
  }

  return firstNumber * secondNumber;
}

let numberResult = multiply(3, 5);
console.log(numberResult);

// question 4
function logNumbers(num1, num2, num3) {
  var convertedNum1 = parseFloat(num1);
  var convertedNum2 = parseFloat(num2);
  var convertedNum3 = parseFloat(num3);

  if (isNaN(convertedNum1) || isNaN(convertedNum2) || isNaN(convertedNum3)) {
    return "Invalid argument types";
  }

  return convertedNum1 + convertedNum2 + convertedNum3;
}

var paragraph = document.querySelector("p");
var sum = logNumbers(6, true, "f");

paragraph.innerHTML = sum;

// question 5
var buttonHeading = document.querySelector(".heading");

buttonHeading.onclick = function () {
  var heading = document.querySelector("h3");
  heading.innerHTML += ": Updated";
};

// question 6
var buttonTitle = document.querySelector(".title");

function changeTitle() {
  document.title = "I've been updated";
}

buttonTitle.onclick = changeTitle;

// question 7
var buttonRed = document.querySelector(".red");
var buttonOrange = document.querySelector(".orange");
var buttonPink = document.querySelector(".pink");

function changeBackground(colour) {
  document.body.style.backgroundColor = colour;
}

buttonRed.onclick = function () {
  changeBackground("red");
};

buttonOrange.onclick = function () {
  changeBackground("orange");
};

buttonPink.onclick = function () {
  changeBackground("pink");
};

// Lesson task 1 module 2 questions
// question 1
var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === suppliedName.toLowerCase()) {
  console.log("names are equal");
} else {
  console.log("names are not equal");
}

// question 2
var username = "myusername";

var usernameLength = username.length;

if (usernameLength >= 4 && usernameLength <= 10) {
  console.log("Acceptable username");
} else {
  if (usernameLength < 4) {
    console.log("Too few characters");
  }
  if (usernameLength > 10) {
    console.log("Too many characters");
  }
}

// question 3
var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if (invoicePaid && productDispatched && customerHasSigned) {
  console.log("Order complete");
} else {
  if (!invoicePaid) console.log("Invoice hasnt been paid");
  if (!productDispatched) console.log("Product hasnt been dispatched");
  if (!customerHasSigned) console.log("Costumer hasnt signed");
}

// question 4
if (!invoicePaid || !productDispatched || !customerHasSigned) {
  if (!invoicePaid) console.log("Invoice hasnt been paid");
  if (!productDispatched) console.log("Product hasnt been dispatched");
  if (!customerHasSigned) console.log("Costumer hasnt signed");
} else {
  console.log("Order complete");
}
