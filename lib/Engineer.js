
// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        
        // evoke the employee class

        super (name, id, email);

        this.github = github; 
    }

    // return the github username from the inquirer response

    getGithub () {
        return this.github;
    }

     // engineer overrides the employee role

    getRole () {
        return "Engineer";
    }
}

// Export Engineer module

module.exports = Engineer; 