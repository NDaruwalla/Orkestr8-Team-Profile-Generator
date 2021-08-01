# Orkestr8 Team Profile Generator
![Icon Name](./chart.png)
<!-- image credit: this image is from icons8-->

  ## Description
  The Orkestr8 Team Profile Generator is an application that creates an HTML page of a manager's team with Engineer and Intern roles. The application leads the user through a series of questions. The responses to the questions are used to auto populate the HTML file.

  ### Link to Full Video
  [Full Screencast Video on YouTube](https://youtu.be/HERE)

  ### Abbreviated Gif
  ![Orkestr8 Team Profile Generator](./img/orkestr8.jpg)


  ## Table of Contents
  - [Description](#description)
  - [User Story/Stories](#story)
  - [Acceptance Criteria](#criteria)
  - [Tools](#tools)
  - [Installation](#installation)
  - [Use](#use)
  - [License](#license)
  - [References](#references)
  - [Tests](#tests)
  - [Questions](#questions)

  ## User Story/Stories
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

  ## Tools
  The tools used to create this application include: HTML, CSS, JavaScript, Bootstrap, Node.js, Inquirer, Jest, Visual Studio Code, GitHub, Git Bash, Screencastify (Screen Video Recorder). 

  ## Installation
  Clone repository, npm install, npm test, npm start, answer question prompts, open html to view the team profile generated.
  [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.
  [Inquirer package](https://www.npmjs.com/package/inquirer)

  ## Use
  Use this application to create a complete team profile.

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
