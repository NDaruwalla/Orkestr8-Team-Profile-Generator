// In addition to `Employee`'s properties and methods, `Manager` will also have the following: `officeNumber`, `getRole()`&mdash;overridden to return `'Manager'`

// Import the employee class

const Employee = require('./Employee');

// Extend the employee class for Manager

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

        // super evokes the manager class

        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    //The manager role overrides employee

    getRole () {
        return "Manager";
    }
}

// Export the manager class

module.exports = Manager; 

