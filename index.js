// packages needed for this application
const fs = require("fs");
const inquirer = require("./node_modules/inquirer");
const genMarkdown = require("./src/generateHtml");
const employeeClass = require("./lib/Employee");
const managerClass = require("./lib/Manager");
const engineerClass = require("./lib/Engineer");
const internClass = require("./lib/Intern");

// an array to store emplyee data to be rendered in html 
let employeeData = [];

// questions array 
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Employee name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee id:',
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'Employee email:',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Employee role:',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
        ],
    },
    {
        type: 'input',
        name: 'office',
        message: 'Employee office number:',
        when: (answers) => {
            if (answers.role === 'Manager') {
                return true;
            };
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Employee GitHub profile:',
        when: (answers) => {
            if (answers.role === 'Engineer') {
                return true;
            };
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Employee school name:',
        when: (answers) => {
            if (answers.role === 'Intern') {
                return true;
            };
        }
    },
    {
        type: 'list',
        name: 'next',
        message: 'How would you like to proceed?',
        choices: [
            'Add another employee',
            'Finish and create my team profile',
        ],
    }
];

let employeesArr = [];

// function to decide where to cont. asking inquirer prompt questions or finish and create html file
function employeeQuestionAnswers () {
    return inquirer.prompt(questions)
    .then((answers) => {
        if (answers.next === 'Finish and create my team profile') {
            employeeData.push(answers);
            return employeeData;
        } else {
            employeeData.push(answers);
            return employeeQuestionAnswers();
        };
    });
}

// write html after answers are collected
employeeQuestionAnswers( )
.then((employeeData) => {
    fs.writeFile('test.txt', JSON.stringify(employeeData), (err) =>
    err ? console.error(err) : console.log(employeeData)
    )
})
.catch((error) => console.log('There has been an error. Please try again.'));
