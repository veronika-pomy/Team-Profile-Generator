// import parent class
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {

        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== "string" || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be a non-empty string");
        }

        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }

        if (typeof github !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }

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