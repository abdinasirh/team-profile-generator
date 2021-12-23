const generateTemplate = (employees) => {
  const createManager = (manager) => {
    return `
    <div class="col-4 mt-3">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h1>${manager.getName()}</h1>
            </div>
            <div class ="card-body">
                <ul class = "list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${
                    manager.getOfficeNumber()
                    }</li>
                </ul>

            </div>

        </div>
    </div>

        
    
    
    `;
  };

  const createIntern = (intern) => {
    return `
    <div class="col-4 mt-3">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h1>${intern.getName()}</h1>
            </div>
            <div class ="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>

            </div>

        </div>
    </div>


    
    
    
    `;
  };

  const createEngineer = (engineer) => {
    return `
    <div class="col-4 mt-3">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h1>${engineer.getName()}</h1>
            </div>
            <div class ="card-body">
                <ul lass="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>

            </div>

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
        <nav class="navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
            
        <main>
            <div class="container">
                <div class="row align-items-center">
                    ${generateTemplate(employees)}
                </div> 
            </div>
        </main>
        
    </body>
    </html>


    `;
  };

