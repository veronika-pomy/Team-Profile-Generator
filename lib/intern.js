// import parent class
const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.order = 3; // added extra key/value to sort order of profiles when generating html
    
        if (typeof school !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }
    
    }

    getSchool ( ) {
        return this.school;
    } 

    getRole () {
        return 'Intern';
    }
}

module.exports = Intern;