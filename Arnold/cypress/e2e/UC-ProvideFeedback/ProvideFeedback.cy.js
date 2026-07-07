describe("Provide Feedback", () => {

  beforeEach(() => {
    // Visit the application homepage.
    cy.visit("https://student.michaelkentburns.com");

    // Accept the cookie consent banner if it is displayed.
    cy.get(".cky-notice-btn-wrapper > .cky-btn-accept")
      .click({ force: true });

    // Verify that the homepage has loaded successfully.
    cy.url().should("include", "student.michaelkentburns.com");

    // Navigate to the login page.
    cy.contains("User").click();
    cy.contains("Login").click();

    // Enter valid login credentials.
    cy.get('[name="log"]')
      .should("be.visible")
      .clear()
      .type("arnold-test", { delay: 50 });

    cy.get('[name="pwd"]')
      .should("be.visible")
      .clear()
      .type("mypassword123useraccount", { delay: 50 });

    // Enable the "Remember Me" option.
    cy.get('[name="rememberme"]').check({ force: true });

    // Submit the login form.
    cy.get('[name="wp-submit"]').click();

    // Verify that the login was successful.
    cy.url().should("not.include", "wp-login");
  });

  it("should log in successfully", () => {
    // Verify that the user is logged in.
    cy.contains("All Surveys").should("be.visible");
  });

  it("should navigate to the All Surveys page", () => {

    // Open the "All Surveys" page.
    cy.contains("All Surveys")
      .should("be.visible")
      .click();

    // Verify that the navigation was successful.
    cy.url().should("include", "completed");
  });


  it("should click to the next-page links", () => {

    // Open the "All Surveys" page.
    cy.get('.wp-block-query-pagination-next')
      .should("be.visible")
      .click();

    // Verify that the navigation was successful.
    cy.url('https://student.michaelkentburns.com/survey/page/2/').should('be.visible');
  });

});