
// In addition to `Employee`'s properties and methods, `Intern` will also have the following: `school`, `getSchool()`,`getRole(),`&mdash;overridden to return `'Intern'`

// Import the Employee class from Employee.js

const Employee = require('./Employee');

// Extend the employee class for Intern (add school) 

class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

     // return the school from the inquirer response
     
    getSchool () {
        return this.school;
    }

    // override employee role to intern
    getRole () {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern;

