const Manager = require('../lib/Manager');

// set up object to test
const manager = new Manager('Bo','88888','bo@gmail.com','59');

describe("Manager", () => {
    describe("Initialization", () => {
        it("Creates an object with a name, id, email, and office number keys if provided valid arguments", () => {
            
            // verifying
            expect(manager.name).toBe("Bo");
            expect(manager.id).toBe("88888");
            expect(manager.email).toBe("bo@gmail.com");
            expect(manager.office).toBe("59");
            
        });

        it("Throws an error if office parameter not a string", () => {

            // set up error
            const cb = () => new Manager('Bo', '88888', 'bo@gmail.com', 59);
      
            // expected message
            const err = new Error("Expected parameter 'office' to be a non-empty string");

            // verifying error and message using callback
            expect(cb).toThrowError(err);

        });
    });

    describe("getOfficeNumber", () => {
        it("getOfficeNumber method returns the passed officeNumber argument", () => {
            
            // verifying
            expect(manager.getOfficeNumber()).toBe('59');

       });
    });

    describe("getRole", () => {
        it("getRole method overrides 'Employee' and returns 'Manager'", () => {
        
            // verifying
            expect(manager.getRole()).toBe('Manager');

       });
    });
});
