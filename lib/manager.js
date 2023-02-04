// import parent class
const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, office){
        super(name, id, email);
        this.office = office;
        this.order = 1; // added extra key/value to sort order of profiles when generating html
    }
    
    getOfficeNumber( ) {
        return this.office;
    }

    getRole( ) {
        return 'Manager';
    }
}

module.exports = Manager;