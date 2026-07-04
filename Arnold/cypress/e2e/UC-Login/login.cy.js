describe("Login page", () => {

  beforeEach(() => {
    // Navigate to the application homepage
    cy.visit("https://student.michaelkentburns.com");

    // Accept the cookie consent banner
    cy.get('.cky-notice-btn-wrapper > .cky-btn-accept').click({ force: true });

    // Verify that the homepage has loaded successfully
    cy.url().should('include', 'student.michaelkentburns.com');

    // Open the User menu
    cy.contains('User').click();

    // Navigate to the Login page
    cy.contains('Login').click();
  });

  it("should reject unknown username", () => {

    // Enter a username that does not exist
    cy.get('[name="log"]')
      .should('be.visible')
      .clear()
      .type('king', { delay: 50 })
      .should('have.value', 'king');

    // Enter a password
    cy.get('[name="pwd"]')
      .should('be.visible')
      .clear()
      .type('user123', { delay: 50 })
      .should('have.value', 'user123');

    // Submit the login form
    cy.get('[name="wp-submit"]').click();
  });

  it("should reject wrong password", () => {

    // Enter a valid username
    cy.get('[name="log"]')
      .should('be.visible')
      .clear()
      .type('leonce', { delay: 50 })
      .should('have.value', 'leonce');

    // Enter an invalid password
    cy.get('[name="pwd"]')
      .should('be.visible')
      .clear()
      .type('wrongpassword', { delay: 50 })
      .should('have.value', 'wrongpassword');

    // Submit the login form
    cy.get('[name="wp-submit"]').click();
  });

});