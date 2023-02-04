// import parent class
const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school){
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