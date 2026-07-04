describe("Login page", () => {

  beforeEach(() => {
    cy.visit("https://student.michaelkentburns.com");

    cy.get('.cky-notice-btn-wrapper > .cky-btn-accept').click({ force: true });

    cy.url().should('include', 'student.michaelkentburns.com');

    cy.contains('User').click();

    cy.contains('Login').click();
  });

  it("should reject unknown username", () => {
    cy.get('[name="log"]').type('king');
    cy.get('[name="pwd"]').type('user123');
    cy.get('[name="wp-submit"]').click();
  });

  it("should reject wrong password", () => {
    cy.get('[name="log"]').type('leonce');
    cy.get('[name="pwd"]').type('wrongpassword');
    cy.get('[name="wp-submit"]').click();
  });

});