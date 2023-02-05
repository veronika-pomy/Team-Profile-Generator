const { default: InputPrompt } = require("inquirer/lib/prompts/input");

// function to generate a profile html code based on role of employee
function choices (input) {
    if (input.getRole() === "Manager") {
        return generateManagerProfile(input);
    } else if (input.getRole() === "Engineer") {
        return generateEngineerProfile(input);
    } else if (input.getRole() === "Intern") {
        return generateInternProfile(input);
    }
};

// generate team profile html code 
function generateTeamProfiles(data) {

    // sort array data to have manager, engineer, intern profiles rendered in that order, regardless of user input order
    data.sort((a,b) => (a.order > b.order) ? 1 : (a.order < b.order ? -1 : 0));

    // set up string parameters to input data into
    let dataString = '';
    let dataToRender;

    // use choices function to get a string of html code to insert later
    for (let i = 0; i < data.length; i++) {
        let dataOutput = choices(data[i]);
        dataToRender = dataString.concat(dataOutput)
        dataString = dataToRender;
    }

    // return string of html code to inserted into the file that will be written
    return dataToRender;
};

// generate manager's profile
function generateManagerProfile(dataManager) {
    return `
        <div class="team">
            <h3 class="name">${dataManager.name}</h3>
            <p class="role">Team Manager</p>
            <p class="id">ID: ${dataManager.id}</p>
            <p class="email"><a href="mailto:${dataManager.email}">${dataManager.email}</a></p>
            <p class="office">Office Number: ${dataManager.office}</p>
        </div>
    `
};
 
// generate engineers' profiles
function generateEngineerProfile(dataEngineer) {
    return `
        <div class="team">
            <h3 class="name">${dataEngineer.name}</h3>
            <p class="role">Engineer</p>
            <p class="id">ID: ${dataEngineer.id}</p>
            <p class="email"><a href="mailto:${dataEngineer.email}">${dataEngineer.email}</a></p>
            <p class="git">GitHub: <a href="https://github.com/${dataEngineer.github}" target="_blank">${dataEngineer.github}</a></p>
        </div>
    `
};

// generate intern's profiles
function generateInternProfile(dataIntern) {
    return `
        <div class="team">
            <h3 class="name">${dataIntern.name}</h3>
            <p class="role">Intern</p>
            <p class="id">ID: ${dataIntern.id}</p>
            <p class="email"><a href="mailto:${dataIntern.email}">${dataIntern.email}</a></p>
            <p class="school">School: ${dataIntern.school}</p>
        </div>
    `
};

// write html file 
function generateHtml(data) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>

    <header>
        <h1>My Team Profiles</h1>
    </header>

    <main class="profile-box">

        ${generateTeamProfiles(data)}

    </main>
</body>
</html>   
`
};
  
module.exports = {
    generateHtml
};