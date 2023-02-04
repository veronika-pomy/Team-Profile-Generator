// import parent class
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.order = 2; // added extra key/value to sort order of profiles when generating html
    }

    getGithub( ) {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;