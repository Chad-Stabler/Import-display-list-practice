// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCandy } from '../utils.js';
import { candy } from '../candies-data.js';

const test = QUnit.test;

test('test the render candy function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div><img src="./assets/jolly-rancher.jpg"><p>jolly ranchers have a hard consistency and a flavor score of 895</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCandy(candy[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'you got it');
});
