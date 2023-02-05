// import parent class
const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, office){
        super(name, id, email);
        this.office = office;
        this.order = 1; // added extra key/value to sort order of profiles when generating html
    
        if (typeof office !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'office' to be a non-empty string");
        }
    }
    
    getOfficeNumber( ) {
        return this.office;
    }

    getRole( ) {
        return 'Manager';
    }
}

module.exports = Manager;