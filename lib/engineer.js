// import parent class
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.order = 2; // added extra key/value to sort order of profiles when generating html
        
        if (typeof github !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
    
    }

    getGithub( ) {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;