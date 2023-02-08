const Intern = require('../lib/Intern');

// set up object to test
const intern = new Intern('Calvin','55555','calvin@gmail.com','Northwestern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("Creates an object with a name, id, email, and school keys if provided valid arguments", () => {
            
            // verifying
            expect(intern.name).toBe("Calvin");
            expect(intern.id).toBe("55555");
            expect(intern.email).toBe("calvin@gmail.com");
            expect(intern.school).toBe("Northwestern");
            
        });

        it("Throws an error if provided no arguments", () => {

            // set up error
            const cb = () => new Intern();

            // verifying using callback
            expect(cb).toThrow();

        });

        it("Throws an error if name parameter not a string", () => {

            // set up error
            const cb = () => new Intern(1, '77777', 'veronika@gmail.com');
      
            // expected message
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            // verifying error and message using callback
            expect(cb).toThrowError(err);

        });

        it("Throws an error if id parameter not a string", () => {

            // set up  error
            const cb = () => new Intern('Veronika', 7, 'veronika@gmail.com');
      
            // expected message
            const err = new Error("Expected parameter 'id' to be a non-empty string");

            // verifying error and message using callback
            expect(cb).toThrowError(err);

        });
        
        it("Throws an error if email parameter not a string", () => {

            // set up error
            const cb = () => new Intern('Veronika', '77777', 7);
      
            // expected message
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            // verifying error and message using callback
            expect(cb).toThrowError(err);
        });

        it("Throws an error if school parameter not a string", () => {

            // set up error
            const cb = () => new Intern('Calvin','55555','calvin@gmail.com');
      
            // expected message
            const err = new Error("Expected parameter 'school' to be a non-empty string");

            // verifying error and message using callback
            expect(cb).toThrowError(err);

        });
    });

    describe("getSchool", () => {
        it("getSchool method returns the passed school argument", () => {
            
            // verifying
            expect(intern.getSchool()).toBe('Northwestern');

       });
    });
 
    describe("getRole", () => {
        it("getRole method overrides 'Employee' and returns 'Intern'", () => {
        
            // verifying
            expect(intern.getRole()).toBe('Intern');

       });
    });

});