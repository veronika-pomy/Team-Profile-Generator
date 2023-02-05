const Employee = require('../lib/Employee');

 // set up object to test
 const employee = new Employee('Veronika','77777','veronika@gmail.com');

describe("Employee", () => {
    describe("Initialization", () => {
        it("Creates an object with a name, id, and email if provided valid arguments", () => {
            
            // verifying
            expect(employee.name).toBe("Veronika");
            expect(employee.id).toBe("77777");
            expect(employee.email).toBe("veronika@gmail.com");

        });

        it("Throws an error if provided no arguments", () => {

            // set up error
            const cb = () => new Employee();

            // verifying using callback
            expect(cb).toThrow();

        });

        it("Throws an error if name parameter not a string", () => {

            // set up error
            const cb = () => new Employee(1, '77777', 'veronika@gmail.com');
      
            // expected message
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            // verifying error and message using callback
            expect(cb).toThrowError(err);

        });

        it("Throws an error if id parameter not a string", () => {

            // set up  error
            const cb = () => new Employee('Veronika', 7, 'veronika@gmail.com');
      
            // expected message
            const err = new Error("Expected parameter 'id' to be a non-empty string");

            // verifying error and message using callback
            expect(cb).toThrowError(err);

        });
        
        it("Throws an error if email parameter not a string", () => {

            // set up error
            const cb = () => new Employee('Veronika', '77777', 7);
      
            // expected message
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            // verifying error and message using callback
            expect(cb).toThrowError(err);
        });
    });

    describe("getName", () => {
        it("getName method returns the passed name argument", () => {
            
            // verifying
            expect(employee.getName()).toBe('Veronika');

       });
    });

    describe("getId", () => {
        it("getId method returns the passed id argument", () => {
            
            // verifying
            expect(employee.getId()).toBe('77777');

       });
    });

    describe("getEmail", () => {
        it("getEmail method returns the passed email argument", () => {
            
            // set up object to test
            const employee = new Employee('Veronika','77777','veronika@gmail.com');

             // verifying
             expect(employee.getEmail()).toBe('veronika@gmail.com');

        });
    });
       
    describe("geRole", () => {
        it("getRole method returns 'Employee'", () => {
        
            // verifying
            expect(employee.getRole()).toBe('Employee');

       });
    });
});
