const Engineer = require('./lib/Engineer'
);
const Manager = require('./lib/Manager'
);
const Intern = require('./lib/Intern'
);
const template = require('./src/template');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');

const allEmployees = [];


const addManager = () => {
    inquirer.prompt ([
        {type: 'input',
        name: 'managerName',
        message: "what is your manager's name?"

        },

        {type: 'input',
        name: 'managerId',
        message: "what is your manager's id?"

        },

        {type: 'input',
        name: 'managerEmail',
        message: "what is your manager's email?"

        },
        {type: 'input',
        name: 'managerOfficeNumber',
        message: "what is your manager's office number?"

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
    console.log(`
    ----------
    add employee
    ----------
    `);

    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'what type of employee would you like to add?',
            choices: ['Intern', 'Engineer', 'Finish building my team']



        }
    ]).then((response) => {
       if(response.role === 'Intern'){

        return inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "what is your intern's name?"
            },
            {
                type: 'input',
                name: 'internId',
                message: "what is your intern's id?"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "what is your intern's email?"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "what is your intern's school?"
            }
        ]).then((response) => {
            const employee = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            allEmployees.push(employee);
            console.log(employee)
            addEmployee();
        })
       }
       if(response.role === 'Engineer'){
        //    console.log('add engineer');
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: "what is your engineer's name?"
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "what is your engineer's id?"
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "what is your engineer's email?"
                },
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: "what is your Engineer's Github?"
                }
                // {
                //     type: 'list',
                //     name: 'confirm',
                //     message: 'Would you like to add more employees?',
                //     choices: ['Yes', 'Done. Finish building my team!']

                // }
            ]).then((response) => {
                const employee = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
                allEmployees.push(employee);
                console.log(employee)
                addEmployee();
            })
       }else if (response.role === 'Finish building my team'){
           console.log('create html page!')
           
       }

       

    })

}


