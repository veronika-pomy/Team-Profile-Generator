// packages needed for this application
const fs = require("fs");
const inquirer = require("./node_modules/inquirer");

// script to write html 
const genHtml = require("./src/generateHtml");

// required classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// array to store user responses to later use to write html
let teamData = [];

// function to write html file
function writeHtml(fileName, data) {
    fs.writeFile(fileName, data, 
        (error) => {
            error ? console.error(error) : console.log("Successfully wrote file")
        }
    )
}

// function to ask how to proceed 
function askToProceed ( ) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'next',
            message: 'How would you like to proceed?',
            choices: ['Add an engineer', 'Add an intern', 'Finish building my team'],
        },
    ])
    .then((answer) => {
       if (answer.next === 'Add an engineer') {
            promptEngineer( );
       } else if (answer.next === 'Add an intern') {
            promptIntern( );
       } else {
        writeHtml('./dist/index.html', genHtml.generateHtml(teamData));
       }
    })
    .catch((error) => console.log(error))  
}

// function to ask engineer questions
function promptEngineer ( ) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter an engineer\'s name:',
            default: 'Engineer\'s Name',
        },
        {
            type: 'input',
            name: 'engineerEmployeeId',
            message: 'Please enter an engineer\'s employee ID:',
            default: '22222',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter an engineer\'s email address:',
            default: 'engineer@gmail.com',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Please enter an engineer\'s GitHub profile name:',
            default: 'enter-profile',
        },
    ])
    .then((answers) => {
        let engineerData = new Engineer(answers.engineerName, answers.engineerEmployeeId, answers.engineerEmail, answers.engineerGithub);
        teamData.push(engineerData);
        askToProceed( );
    })
    .catch((error) => console.log(error))  
}

// function to ask intern questions
function promptIntern ( ) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter an intern\'s name:',
            default: 'Intern\'s Name',
        },
        {
            type: 'input',
            name: 'internEmployeeId',
            message: 'Please enter an intern\'s employee ID:',
            default: '33333',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Please enter an intern\'s email address:',
            default: 'intern@gmail.com',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Please enter the name of intern\'s school:',
            default: 'Northwestern',
        },
    ])
    .then((answers) => {
        let internData = new Intern(answers.internName, answers.internEmployeeId, answers.internEmail, answers.internSchool);
        teamData.push(internData);
        askToProceed( );
    })
    .catch((error) => console.log(error)) 
}

// function to initialize the app 
// asks manager questions first 
function init ( ) {
    function promptManager ( ) {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Please enter the manager\'s name:',
                default: 'Team Manager\'s Name',
            },
            {
                type: 'input',
                name: 'managerEmployeeId',
                message: 'Please enter the manager\'s employee ID:',
                default: '11111',
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Please enter the manager\'s email address:',
                default: 'manager@gmail.com',
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'Please enter the manager\'s office number:',
                default: '1',
            },
        ])
    }

    promptManager( )
    .then((answers) => {
        const managerData = new Manager(answers.managerName, answers.managerEmployeeId, answers.managerEmail, answers.managerOfficeNumber);
        teamData.push(managerData);
        askToProceed( );
        }
    )
    .catch((error) => console.log(error))
}

// initialize app
init( );