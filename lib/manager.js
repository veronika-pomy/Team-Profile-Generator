// import parent class
const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, office){

        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== "string" || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be a non-empty string");
        }

        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }

        if (typeof office !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'office' to be a non-empty string");
        }

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