// Create all profile cards: manager, engineer, intern

// Create the manager profile card
const generateManager = function (manager) {
    return `

  <div class="card mb-3 shadow p-3 mb-5 bg-body rounded" style="max-width: 350px;">
    <div class="row g-0">
      <div class="col-md-4 icon">
        <img src="./img/icons8-manager.png" alt="manager icon">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title">${manager.name}</h2>
            <hr>
            <h3 class="card-title">Manager</h3>
            <p class="card-text">ID: ${manager.id}</p>
              <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="card-text">Office Number: ${manager.officeNumber}</p>
              <hr>
              <p class="card-text"><small class="text-muted">Orkestr8 August 2021</small></p>
        </div>
      </div>
    </div>
  </div>
    `;
}

// Create the engineer profile card
const generateEngineer = function (engineer) {
    return `
<div class="card mb-3 shadow p-3 mb-5 bg-body rounded" style="max-width: 350px;">
<div class="row g-0">
  <div class="col-md-4 icon">
    <img src="./img/icons8-engineer.png" alt="manager icon">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <h2 class="card-title">${engineer.name}</h2>
    <hr>
    <h3 class="card-title">Engineer</h3>
    <p class="card-text">ID: ${engineer.id}</p>
      <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    
          <p class="card-text">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          <hr>
          <p class="card-text"><small class="text-muted">Orkestr8 August 2021</small></p>
    </div>
  </div>
</div>
</div>
`
}

// Create the intern profile card
const generateIntern = function (intern) {
    return `
    <div class="card mb-3 shadow p-3 mb-5 bg-body rounded" style="max-width: 350px;">
    <div class="row g-0">
      <div class="col-md-4 icon">
        <img src="./img/icons8-intern.png" alt="manager icon">
      </div>
      <div class="col-md-8">
        <div class="card-body">
        <h2 class="card-title">${intern.name}</h2>
        <hr>
        <h3 class="card-title">Intern</h3>
        <p class="card-text">ID: ${intern.id}</p>
          <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="card-text">School: ${intern.school}</p>
              <hr>
              <p class="card-text"><small class="text-muted">Orkestr8 August 2021</small></p>
        </div>
      </div>
    </div>
  </div>
  `
};

// once the array of profiles has been created, send it to the generateHTML page for display; generate card according to employee/team member profile
generateHTML = (data) => {

     pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;
}

// Generate the HTML page using template and insert employee cards in page
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <!-- source for icons is https://icons8.com/ -->
  
    <title>Orkestr8: The Team Profile Generator</title>

  </head>
    <body>
    <header>
    <h1 class="title">Orkestr8: The Team Profile Generator</h1>
    <p class="quote">“No one can whistle a symphony. It takes a whole orchestra to play it.” --Halford E. Luccock</p></header>

      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  ${employeeCards}
              </div>
          </div>
      </main>
  
  <!-- JQuery cdn -->
  <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
    crossorigin="anonymous"></script>
  <!-- Option 1: Bootstrap Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous">
  </script>
</body>
</html>
`;
}

module.exports = generateHTML; 






