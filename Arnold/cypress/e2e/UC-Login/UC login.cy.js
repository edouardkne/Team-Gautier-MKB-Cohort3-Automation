describe("Login tests", () => {

 it("should login successfully with valid credentials", () => {
  cy.visit("https://student.michaelkentburns.com/wp-login.php");

});

it("should reject login with wrong password", () => {
  cy.visit("https://student.michaelkentburns.com/wp-login.php");

});

it("should suggest account creation when email does not exist", () => {
  cy.visit("https://student.michaelkentburns.com/wp-login.php");
  
});

it("should track failed login attempts", () => {
  cy.visit("https://student.michaelkentburns.com/wp-login.php");

});

it("should lock account after 3 failed attempts", () => {
  cy.visit("https://student.michaelkentburns.com/wp-login.php");
  
});

it("should lock account for longer after 5 failed attempts", () => {
  cy.visit("https://student.michaelkentburns.com/wp-login.php");
  
});

});