// import functions and grab DOM elements
import { candy, bosses, superCars } from './outside-data.js';
import { renderCandy, renderBoss, renderCar } from './utils.js';
const candyEl = document.getElementById('candies');
const bossesEl = document.getElementById('bosses');
const carsEl = document.getElementById('superCars');

// let state
displayAll();
function displayAll() {
    displayCandyListings();
    displayBosses();
    displayCars();
}

function displayCandyListings() {
    for (let item of candy) {
        const newDiv = renderCandy(item);
        candyEl.append(newDiv);
    }
}

function displayBosses() {
    for (let boss of bosses) {
        const newDiv = renderBoss(boss);
        bossesEl.append(newDiv);
    }
}

function displayCars() {
    for (let car of superCars) {
        const newDiv = renderCar(car);
        carsEl.append(newDiv);
    }
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
