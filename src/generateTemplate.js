const generateTemplate = (employees) => {
  const createManager = (manager) => {
    return `
<div class = "card employee-card">
    <div class="card-header">
        <h1>${manager.getName()}</h1>
    </div>
    <div class ="card-body">
        <ul>
            <li class="id">ID: ${manager.getId()}</li>
            <li class="email"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="office-number">Office Number: ${
              manager.getOfficeNumber()
            }</li>
        </ul>

    </div>

</div>
    
    
    
    `;
  };

  const createIntern = (intern) => {
    return `
<div class = "card employee-card">
    <div class="card-header">
        <h1>${intern.getName()}</h1>
    </div>
    <div class ="card-body">
        <ul>
            <li class="id">ID: ${intern.getId()}</li>
            <li class="email"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="school">School: ${intern.getSchool()}</li>
        </ul>

    </div>

</div>
    
    
    
    `;
  };

  const createEngineer = (engineer) => {
    return `
<div class = "card employee-card">
    <div class="card-header">
        <h1>${engineer.getName()}</h1>
    </div>
    <div class ="card-body">
        <ul>
            <li class="id">ID: ${engineer.getId()}</li>
            <li class="email"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="github">GitHub: ${
              engineer.getGithub()
            }</li>
        </ul>

    </div>

</div>
    
    
    
    `;
  };

  const html = [];

  html.push(employees
    .filter(employee => employee.getRole() === "Manager")
  .map(manager => createManager(manager))
  );

  html.push(employees.filter(employee => employee.getRole() === "Intern")
  .map(intern => createIntern(intern)).join(''));

  html.push(employees.filter(employee => employee.getRole() === "Engineer")
  .map(engineer => createEngineer(engineer)).join(''));
  

  return html.join("");

};


module.exports = employees => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> 
        <link rel="stylesheet" href="style.css">


    </head>
    <body>
        <header>
            <h2>Team Profile</h2>
        </header>       
        // <nav class="navbar navbar-light bg-light">
        //     <span class="navbar-brand mb-0 h1">Team Profile</span>
        // </nav>
            
        <main>
            <div class="container">
                ${generateTemplate(employees)}
            </div>
        </main>
        
    </body>
    </html>


    `;
  };

