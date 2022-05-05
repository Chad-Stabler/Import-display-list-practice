// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCandy, renderBoss, } from '../utils.js';
import { candy, bosses } from '../outside-data.js';

const test = QUnit.test;

test('test the render candy function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="candy"><img src="./assets/jolly-rancher.jpg"><p>jolly ranchers have a hard consistency and a flavor score of 895</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCandy(candy[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'you got it');
});

test('test the render boss function', (expect) => {
    const expected = `<div class="boss"><img src="./assets/starscourge-radahn.jpg"><p>Starscourge Radahn is a boss found in Elden Ring and has attacks: Gravity Arrows,Rain Arrows,Scatter Arrows,Random Slams and Sweeps,Double Slam,Dive Attack,Gravity Step,Quick Swings,Forward Slam,Chasing Slash,Quick Spin,Phase 1.5 Transformation (Cragblade and Gravitas),Cross Dive,Gravity Waves,Collapsing Stars,Phase 2 Transition,Summon Meteors,Spiralling Death</p></div>`;

    const actual = renderBoss(bosses[0]);

    expect.equal(actual.outerHTML, expected, 'one step closer to completing this assignment');
});
