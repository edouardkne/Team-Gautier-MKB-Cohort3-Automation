describe("Login Page", () => {

  beforeEach(() => {
    // Open the application homepage
    cy.visit("https://student.michaelkentburns.com");

    // Accept the cookie consent banner
    cy.get(".cky-notice-btn-wrapper > .cky-btn-accept").click({ force: true });

    // Verify that the homepage is loaded
    cy.url().should("include", "student.michaelkentburns.com");

    // Navigate to the login page
    cy.contains("User").click();
    cy.contains("Login").click();
  });

  it("should reject an unknown username", () => {

    // Enter an unknown username
    cy.get('[name="log"]')
      .should("be.visible")
      .clear()
      .type("king", { delay: 50 });

    // Enter a password
    cy.get('[name="pwd"]')
      .should("be.visible")
      .clear()
      .type("user123", { delay: 50 });

    // Enable the Remember Me option
    cy.get('[name="rememberme"]').check({ force: true });

    // Submit the login form
    cy.get('[name="wp-submit"]').click();

  });

  it("should reject an invalid password", () => {

    // Enter a valid username
    cy.get('[name="log"]')
      .should("be.visible")
      .clear()
      .type("Arnold", { delay: 50 });

    // Enter an incorrect password
    cy.get('[name="pwd"]')
      .should("be.visible")
      .clear()
      .type("wrongpassword", { delay: 50 });

    // Enable the Remember Me option
    cy.get('[name="rememberme"]').check({ force: true });

    // Submit the login form
    cy.get('[name="wp-submit"]').click();

  });

  it("should login successfully with valid credentials", () => {

    // Enter a valid username
    cy.get('[name="log"]')
      .should("be.visible")
      .clear()
      .type("Arnold", { delay: 50 });

    // Enter the correct password
    cy.get('[name="pwd"]')
      .should("be.visible")
      .clear()
      .type("Lephare-bukavu0970005782", { delay: 50 });

    // Enable the Remember Me option
    cy.get('[name="rememberme"]').check({ force: true });

    // Submit the login form
    cy.get('[name="wp-submit"]').click();

  });

});