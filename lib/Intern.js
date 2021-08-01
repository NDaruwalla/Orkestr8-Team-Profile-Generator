
// In addition to `Employee`'s properties and methods, `Intern` will also have the following: `school`, `getSchool()`,`getRole(),`&mdash;overridden to return `'Intern'`

// Import the Employee class from Employee.js

const Employee = require('./Employee');

// Extend the employee class for Intern (add school) 

class Intern extends Employee  {
    constructor (name, id, email, school) {
        
        // evoke the employee class
        super (name, id, email); 

        this.school = school; 
    }

     // return the school from the inquirer response

    getSchool () {
        return this.school;
    }

    // override employee role for intern

    getRole () {
        return "Intern";
    }
}

// Export intern module

module.exports = Intern;

