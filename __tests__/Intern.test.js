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