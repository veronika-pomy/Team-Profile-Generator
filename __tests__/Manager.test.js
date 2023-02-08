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

        it("Throws an error if provided no arguments", () => {

            // set up error
            const cb = () => new Manager();

            // verifying using callback
            expect(cb).toThrow();

        });

        it("Throws an error if name parameter not a string", () => {

            // set up error
            const cb = () => new Manager(1, '77777', 'veronika@gmail.com');
      
            // expected message
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            // verifying error and message using callback
            expect(cb).toThrowError(err);

        });

        it("Throws an error if id parameter not a string", () => {

            // set up  error
            const cb = () => new Manager('Veronika', 7, 'veronika@gmail.com');
      
            // expected message
            const err = new Error("Expected parameter 'id' to be a non-empty string");

            // verifying error and message using callback
            expect(cb).toThrowError(err);

        });
        
        it("Throws an error if email parameter not a string", () => {

            // set up error
            const cb = () => new Manager('Veronika', '77777', 7);
      
            // expected message
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            // verifying error and message using callback
            expect(cb).toThrowError(err);
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
