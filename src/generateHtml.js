// write function that generates manager's profile

// write function that generates engineers' profiles

// write function that generates intern's profiles


function generateHtml(data) {
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
        <h1>Team Profiles</h1>
    </header>

    <main class="profile-box">

        <div id="manager">
            <h3 class="name"><h3>
            <p class="title"><p>
            <p class="id"></p>
            <p class="email"></p>
            <p class="office"></p>
        </div>

        <div id="engineer">
            <h3 class="name"></h3>
            <p class="title"></p>
            <p class="id"></p>
            <p class="email"></p>
            <p class="git"></p>
        </div>

        <div id="engineer">
            <h3 class="name"></h3>
            <p class="title"></p>
            <p class="id"></p>
            <p class="email"></p>
            <p class="git"></p>
        </div>

        <div id="engineer">
            <h3 class="name"></h3>
            <p class="title"></p>
            <p class="id"></p>
            <p class="email"></p>
            <p class="git"></p>
        </div>

        <div id="engineer">
            <h3 class="name"></h3>
            <p class="title"></p>
            <p class="id"></p>
            <p class="email"></p>
            <p class="git"></p>
        </div>
        
        <div id="intern">
            <h3 class="name"></h3>
            <p class="title"></p>
            <p class="id"></p>
            <p class="email"></p>
            <p class="school"></p>
        </div>

    </main>

    
</body>
</html>   
`
};
  
module.exports = {
    generateHtml
};