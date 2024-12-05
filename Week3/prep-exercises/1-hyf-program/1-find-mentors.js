import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  const mentorsCanTeachModule = mentors 
    .filter(mentor => mentor.canTeach.includes(moduleName)) // Filtering the mentors that can teach given module
    .map(mentor => mentor.name); // Creating a new array 
    
  return mentorsCanTeachModule;
};
// You can uncomment out this line to try your function
console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  const mentorsCanTeachModule = possibleMentorsForModule(moduleName);

  if (!mentorsCanTeachModule.length) { // If the given module don't have any mentors matched
    return `No mentors found for ${moduleName}`;
  }
  
  const randomIndex = Math.floor(Math.random() * mentorsCanTeachModule.length); // Getting a random number as index
  const randomMentor = mentorsCanTeachModule[randomIndex]; // Getting the random mentor

  return randomMentor;
};
// You can uncomment out this line to try your function
console.log(findMentorForModule('javascript'));
