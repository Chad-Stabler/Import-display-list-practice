// import functions and grab DOM elements
import { candy } from './candies-data.js';
import { renderCandy } from './utils.js';
const candyEl = document.getElementById('candies');


// let state
function displayCandyListings() {
    for (let item of candy) {
        const newDiv = renderCandy(item);
        candyEl.append(newDiv);
    }
}
displayCandyListings();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
