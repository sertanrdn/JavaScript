"use strict";
/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */
const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);
  if (trafficLight.possibleStates[trafficLight.stateIndex] === "green") {
    trafficLight.stateIndex = 1; // Turn to orange
  } else if (trafficLight.possibleStates[trafficLight.stateIndex] === "orange") {
    trafficLight.stateIndex = 2; // Turn to red
  } else if (trafficLight.possibleStates[trafficLight.stateIndex] === "red") {
    cycle++;
    trafficLight.stateIndex = 0; // Turn to green again
  }
  // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to cycles and turn it green
}

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
