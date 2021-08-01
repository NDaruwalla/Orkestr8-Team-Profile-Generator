# Orkestr8 Team Profile Generator
![Icon Name](dist/img/chart.png)
<!-- image credit: this image is from icons8-->

  ## Description
  The Orkestr8 Team Profile Generator is an application that creates an HTML page of a manager's team with Engineer and Intern roles. The application leads the user through a series of questions. The responses to the questions are used to auto populate the HTML file.

  ### Link to Full Video
  [Full Screencast Video on YouTube](https://youtu.be/ftZpPTvN0t0)
  

  ### Screen Capture
  ![Orkestr8 Team Profile Generator](dist/img/orkestr8.jpg)


  ## Table of Contents
  - [Description](#description)
  - [User Story](#story)
  - [Acceptance Criteria](#criteria)
  - [Development Overview](#development-overview)
  - [Tools](#tools)
  - [Installation](#installation)
  - [Use](#use)
  - [Future Considerations](#future-considerations)
  - [License](#license)
  - [References](#references)
  - [Tests](#tests)
  - [Questions](#questions)

  ## User Story
   ```md
  AS A manager
  I WANT to generate a webpage that displays my team's basic info
  SO THAT I have quick access to their emails and GitHub profiles
  ```

  ## Acceptance Criteria
  ```md
  GIVEN a command-line application that accepts user input
  WHEN I am prompted for my team members and their information
  THEN an HTML file is generated that displays a nicely formatted team roster based on user input
  WHEN I click on an email address in the HTML
  THEN my default email program opens and populates the TO field of the email with the address
  WHEN I click on the GitHub username
  THEN that GitHub profile opens in a new tab
  WHEN I start the application
  THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
  WHEN I enter the team manager’s name, employee ID, email address, and office number
  THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
  WHEN I select the engineer option
  THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
  WHEN I select the intern option
  THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
  WHEN I decide to finish building my team
  THEN I exit the application, and the HTML is generated
  ```
  ## Development Overview
  ### File Structure
        ```md
      __tests__/			// jest tests
        Employee.test.js
        Engineer.test.js
        Intern.test.js
        Manager.test.js
      dist/               // rendered output (HTML) and CSS style sheet
        img/              // images used in the application
        index.html
        style.css
      lib/				// classes
      src/				// template helper code
      index.js			// runs the application
      ```
  ### Classes
      This application includes `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (located in the `_tests_` directory) all passed.

      The first class is an `Employee` parent class with the following properties and methods:

      * `name`
      * `id`
      * `email`
      * `getName()`
      * `getId()`
      * `getEmail()`
      * `getRole()`returns `'Employee'`

      The other three classes extend `Employee`.

      In addition to `Employee`'s properties and methods, `Manager` has the following:

      * `officeNumber`
      * `getRole()` overridden to return `'Manager'`

      In addition to `Employee`'s properties and methods, `Engineer` has the following:

      * `github` GitHub username
      * `getGithub()`
      * `getRole()` overridden to return `'Engineer'`

      In addition to `Employee`'s properties and methods, `Intern` has the following:

      * `school`
      * `getSchool()`
      * `getRole()` overridden to return `'Intern'`


  ## Tools
  The tools used to create this application include: HTML, CSS, JavaScript, Bootstrap, Node.js, [Inquirer package](https://www.npmjs.com/package/inquirer) for question prompts, [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests, Visual Studio Code, GitHub, Git Bash, Screencastify (Screen Video Recorder). 

  ## Installation
  Clone repository, npm install, npm test, npm start, answer question prompts, open html to view the team profile generated.


  ## Use
  This application enables managers to create a complete team profile for various roles (manager, intern, engineer).


  ## Future Considerations
  In the future I will add functionality to validate the format of user data input. For example, I will use a regex to validate the email address. This functionality was not a requirement of the assignment.  


  ## License
  MIT
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  Click badge for license description.
  
  
  ## References
  The following references were used to create this application: 
  https://www.w3schools.com/nodejs/nodejs_filesystem.asp
  https://www.npmjs.com/package/inquirer#methods
  https://jestjs.io/docs/getting-started
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function 

 
  ## Tests
  The test method used was npm Jest. The application includes tests for `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes are located in the `_tests_` directory.

  ## Questions
  If you have questions or need help with this application:

  Contact me on GitHub:
  [ndaruwalla](https://github.com/ndaruwalla)
 
  Or, via [Email](mailto:nicole.daruwalla@gmail.com)
