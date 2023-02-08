// import parent class
const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school){

        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== "string" || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be a non-empty string");
        }

        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }

        if (typeof school !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }

        super(name, id, email);
        this.school = school;
        this.order = 3; // added extra key/value to sort order of profiles when generating html
    }

    getSchool ( ) {
        return this.school;
    } 

    getRole () {
        return 'Intern';
    }
}

module.exports = Intern;