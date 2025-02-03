console.log("This is for module 3");

// Lesson Task 4 module 1
// question 1
function printSeason(season) {
  console.log(season);
}

printSeason("summer");

// question 2
function printNumbers(firstNumber, secondNumber) {
  console.log("First: " + firstNumber + " " + "Second: " + secondNumber);
}

printNumbers(10, 14);

// question 3
function addNumbers(num1, num2, num3) {
  const result = num1 + num2 + num3;
  return result;
}

const totalnum = addNumbers(5, 10, 15);

const totalContainer = document.querySelector(".total");
totalContainer.innerHTML = totalnum;

// question 4
function createGreeting(name) {
  const greeting = "Hello, my name is " + name + ".";
  return greeting;
}

const greeting = createGreeting("Mike");

const nameContainer = document.querySelector("#name");
nameContainer.innerHTML = greeting;

// question 5
const sports = ["golf", "football", "cricket"];

function printListItems(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

printListItems(sports);

// question 6
const games = [
  {
    name: "Starcraft 2",
    released: "2010",
  },
  {
    name: "Age of Empires II",
  },
  {
    name: "Cyberpunk 2077",
    released: 2020,
  },
];

function createGames(gamesList) {
  let html = "";

  for (let i = 0; i < gamesList.length; i++) {
    let releaseYear = "Unknown year";

    if (gamesList[i].released) {
      releaseYear = gamesList[i].released;
    }

    html += `<div class="game">
                <h5>${gamesList[i].name}</h5>
                <p>Released: ${releaseYear}</p>
            </div>`;
  }

  return html;
}

const newHTML = createGames(games);

const gameContainer = document.querySelector(".game-container");
gameContainer.innerHTML = newHTML;

// Lesson task 2 module 3

// question 1
let names = ["Alice", "Bob", "Charlie"];
names.forEach((name) => console.log(`Hello, ${name}!`));

// with function
function greetNames(names) {
  names.forEach((name) => console.log(`Hello, ${name}!`));
}

greetNames(["Alice", "Bob", "Charlie"]);

// question 2
let numbers = [1, 2, 3];
numbers.map((number) => console.log(`${number}` * 2));

// with funcion
function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

console.log(doubleNumbers([1, 2, 3]));

// question 3
let numbersFilter = [5, 12, 18, 7];

let higherThan10 = numbersFilter.filter((num) => num > 10);
console.log(higherThan10);

// with function
function filterGreaterThanTen(numbers) {
  return numbers.filter((number) => number > 10);
}

console.log(filterGreaterThanTen([5, 12, 18, 7]));

// question 4
let numbersReduce = [1, 2, 3, 4];

let totalNumber = numbersReduce.reduce((total, total1) => total + total1, 0);
console.log(totalNumber);

// with function
function sumNumbers(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sumNumbers([1, 2, 3, 4]));
