const Engineer = require('../lib/Engineer');

// set up object to test
const engineer = new Engineer('Pete','99999','pete@gmail.com','pete-git');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Creates an object with a name, id, email, and github keys if provided valid arguments", () => {
            
            // verifying
            expect(engineer.name).toBe("Pete");
            expect(engineer.id).toBe("99999");
            expect(engineer.email).toBe("pete@gmail.com");
            expect(engineer.github).toBe("pete-git");
            
        });

        it("Throws an error if github parameter not a string", () => {

            // set up error
            const cb = () => new Engineer('Pete','99999','pete@gmail.com',0);
      
            // expected message
            const err = new Error("Expected parameter 'github' to be a non-empty string");

            // verifying error and message using callback
            expect(cb).toThrowError(err);

        });
    });

    describe("getGithub", () => {
        it("getGithub method returns the passed github argument", () => {
            
            // verifying
            expect(engineer.getGithub()).toBe('pete-git');

       });
    });

    describe("getRole", () => {
        it("getRole method overrides 'Employee' and returns 'Engineer'", () => {
        
            // verifying
            expect(engineer.getRole()).toBe('Engineer');

       });
    });
});