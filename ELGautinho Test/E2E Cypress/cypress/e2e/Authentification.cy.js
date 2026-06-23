describe("creer un compte et se connecter dedans", () => {
  beforeEach(() => {
    cy.visit("https://student.michaelkentburns.com/wp-login.php");
  });

  it("se connecte avec un compte existant", () => {
    cy.get("#user_login").type("gcherubala11@gmail.com");
    cy.get("#user_pass").type("gcherubala11@gmail.com");
    cy.get("#wp-submit").click();
  });
});
