
  it("should login successfully with valid credentials", () => {
  });

  it("should track failed login attempts", () => {
  });

  it("should lock account after 3 failed attempts", () => {
  });

  it("should lock account for longer after 5 failed attempts", () => {
  });




  describe("Login page", () => {
  beforeEach(() => {
    cy.visit("https://student.michaelkentburns.com/wp-login.php");
  });
  it("should suggest account creation when email does not exist", () => {

    cy.get('[name="log"]').type('king')
    cy.get('[name="pwd"]').type('user123')
    cy.get('[name="wp-submit"]').click()

  });

    it("should reject login with wrong password", () => {
      cy.get('[name="log"]').type('leonce')
    cy.get('[name="pwd"]').type('wrongpassword')
    cy.get('[name="wp-submit"]').click()
  });

});


 