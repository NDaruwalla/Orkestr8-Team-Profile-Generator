// Require the generateHTML.js dock from the src folder and Require all team profiles (Manager, Engineer, Intern)
const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// Require applicable node modules fs and inquirer
const fs = require('fs'); 
const inquirer = require('inquirer');

// Create the variable for the team array
const teamArray = []; 

// Begin the inquirer prompts for the manager inputs: manager's name, id, email, office number
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager for this team?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("The manager's name is required. Please enter manager's name.");
                    return false; 
                }
            }
        },
        // Continue inquirer prompts for manager's ID
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
          // Continue inquirer prompts for manager's email
          // Use regex to validate email
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter the email.')
                    return false; 
                }
            }
        },
          // Continue inquirer prompts for manager's office number
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter the office number.')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    // Add manager profile data to the array
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);
        teamArray.push(manager); 
        console.log(manager); 
    })
};

// Begin the inquirer prompts for the employees/team members; create prompts according to role
const addEmployee = () => {
    console.log(`Thank you for adding the manager profile. Now, let's add the manager's team member profiles.`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Select the team member's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the name of this team member.", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("The team member's name is required. Please enter the name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team member's employee ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("The team member employee ID is required. Please enter the ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team member's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('The email is required. Please enter email.')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("The employee's github username is required. Please enter the username.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the name of the intern's school.",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("The school name is required. Please enter the school name.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Do you need to add additional team members?',
            default: false
        }
    ])
    .then(employeeData => {
       
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })
};

// Write a function to generate the HTML page using FS (file system)
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
      
        if (err) {
            console.log(err);
            return;
      
        } else {
            console.log("Your team profile is ready. View the index.html in the browser.")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });