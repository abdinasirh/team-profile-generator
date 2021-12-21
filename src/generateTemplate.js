const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")


const createManager = manager => {
    return `
<div class = "card employee-card">
    <div class="card-header">
        <h1>${manager.getName()}</h1>
    </div>
    <div class ="card-body">
        <ul>
            <li class="id">ID: ${manager.managerId}</li>
            <li class="email"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="office-number">Office Number: ${manager.managerOfficeNumber}</li>
        </ul>

    </div>

</div>
    
    
    
    `
}

const createIntern = Intern => {
    return `
<div class = "card employee-card">
    <div class="card-header">
        <h1>${intern.getName()}</h1>
    </div>
    <div class ="card-body">
        <ul>
            <li class="id">ID: ${intern.internID}</li>
            <li class="email"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="office-number">Office Number: ${intern.internSchool}</li>
        </ul>

    </div>

</div>
    
    
    
    `
}


const createEngineer = Engineer => {
    return `
<div class = "card employee-card">
    <div class="card-header">
        <h1>${engineer.getName()}</h1>
    </div>
    <div class ="card-body">
        <ul>
            <li class="id">ID: ${engineer.engineerID}</li>
            <li class="email"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="office-number">Office Number: ${engineer.engineerGithub}</li>
        </ul>

    </div>

</div>
    
    
    
    `
}



const createTeam = function(){

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1>Team Profile</h1>
        </header>
    
        <main>
            <div class="container">
                
            </div>
        </main>
        
    </body>
    </html>


    `
}
