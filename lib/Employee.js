// The first class is an `Employee` parent class with the following properties and methods: `name`, `id`, `email`,`getName()`, `getId()`,`getEmail()`,`getRole()`&mdash;returns `'Employee'`

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // return the name from the inquirer response

    getName () {
        return this.name;
    }

      // return the ID from the inquirer response

    getId () {
        return this.id;
    }   

      // return the email from the inquirer response

    getEmail () {
        return this.email;
    }

    // return the employee type from the inquirer response

    getRole () {
        return 'Employee'; 
    }
};

// Export the employee module

module.exports = Employee; 


