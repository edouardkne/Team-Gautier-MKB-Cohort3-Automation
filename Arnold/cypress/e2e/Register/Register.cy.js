describe("Register Page", () => {

  beforeEach(() => {
    // Open the application homepage
    cy.visit("https://student.michaelkentburns.com");

    // Accept the cookie consent banner
    cy.get(".cky-notice-btn-wrapper > .cky-btn-accept").click({ force: true });

    // Verify that the homepage is loaded
    cy.url().should("include", "student.michaelkentburns.com");

    // Navigate to the login page
    cy.contains("User").click();
    cy.contains("Register").click();
  });


  it("should reject an unknown username", () => {

    // Enter an unknown username
    cy.get('[name="user_login"]')
      .should("be.visible")
      .clear()
      .type(' ', { delay: 50 });

    // Enter a password
    cy.get('[name="user_email"]')
      .should("be.visible")
      .clear()
      .type(' ', { delay: 50 });

    // Submit the login form
    cy.get('[name="wp-submit"]').click();

  });


  it("should reject an unknown username", () => {

    // This username is already registered.
    cy.get('[name="user_login"]')
      .should("be.visible")
      .clear()
      .type('leonce', { delay: 50 });

    // Enter a password
    cy.get('[name="user_email"]')
      .should("be.visible")
      .clear()
      .type(' ', { delay: 50 });

    // Submit the login form
    cy.get('[name="wp-submit"]').click();

  });


  it("should reject an unknown username", () => {

    // This email address is already registered. 
    cy.get('[name="user_login"]')
      .should("be.visible")
      .clear()
      .type('Aleonce', { delay: 50 });

    // Enter a password
    cy.get('[name="user_email"]')
      .should("be.visible")
      .clear()
      .type('leoncenarnolde@gmail.com', { delay: 50 });

    // Submit the login form
    cy.get('[name="wp-submit"]').click();

  });


  it("should reject an unknown username", () => {

    cy.get('[name="user_login"]')
      .should("be.visible")
      .clear()
      .type('Aleonce', { delay: 50 });

    // Enter a password
    cy.get('[name="user_email"]')
      .should("be.visible")
      .clear()
      .type('aleoncen@gmail.com', { delay: 50 });

    // Submit the login form
    cy.get('[name="wp-submit"]').click();

  });
});