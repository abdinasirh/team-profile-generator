const Engineer = require('./lib/Engineer'
);
const Manager = require('./lib/Manager'
);
const Intern = require('./lib/Intern'
);

const inquirer = require('inquirer');
const fs = require('fs');

const allEmployees = [];


const addManager = () => {
    inquirer.prompt ([
        {type: 'input',
        name: 'managerName',
        message: "what is your manager's name"

        },

        {type: 'input',
        name: 'managerId',
        message: "what is your manager's id"

        },

        {type: 'input',
        name: 'managerEmail',
        message: "what is your manager's email"

        },
        {type: 'input',
        name: 'managerOfficeNumber',
        message: "what is your manager's office number"

        }
    ])

    .then((response) => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
        allEmployees.push(manager);
        console.log(allEmployees)
        addEmployee();
       
       
    })


}
addManager();

const addEmployee = () => {
    // console.log('i am working');
}


