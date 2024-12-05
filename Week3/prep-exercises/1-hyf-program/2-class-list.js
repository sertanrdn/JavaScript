import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {
  const classInfo = classes.find(cls => cls.name === className); // Find the class that passed as an argument
  
  if (!classInfo) {
    return `There is no ${className}`;
  }

  const classStudents = students
    .filter(student => student.class === className) // Filtering the students array that matches with className
    .map(student => ({ name: student.name, role: 'student' })); // Returning new array with student name and role: 'student

  const classMentors = mentors
    .filter(mentor => mentor.nowTeaching === classInfo.currentModule) // Filtering the mentors array that matches with the current module of class
    .map(mentor => ({ name: mentor.name, role: 'mentor' })); // Returning new array 

  return [...classStudents, ...classMentors]; // Destructuring the arrays that assign to values so we can combine them
};
// You can uncomment out this line to try your function
console.log(getPeopleOfClass('class36'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
  const activeClasses = classes.filter(cls => cls.active); // Finding the active classes

  const result = activeClasses.reduce((acc, activeClass) => { // Using reduce function get the each active classes 
    acc[activeClass.name] = getPeopleOfClass(activeClass.name); // Assign the each active class to the function we used upside to par classname as key 
    return acc;
  }, {}); // Initialize the first value as empty object 

  return result;
};
// You can uncomment out this line to try your function
console.log(getActiveClasses());
