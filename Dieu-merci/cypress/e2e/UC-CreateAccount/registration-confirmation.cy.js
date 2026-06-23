describe('UC-CreateAccount / registration confirmation', () => {
  const url = '/wp-login.php?checkemail=registered';

  beforeEach(() => {
    cy.visit(url);
  });

  it('shows confirmation title and heading', () => {
    cy.title().should('include', 'Check your email');
    cy.get('.screen-reader-text').should('contain', 'Check your email');
  });

  it('displays login message with correct content and link', () => {
    cy.get('#login-message').should('be.visible')
      .and('contain', 'Registration complete. Please check your email');

    cy.get('#login-message').find('a')
      .should('have.attr', 'href', 'https://student.michaelkentburns.com/wp-login.php')
      .and('contain', 'login page');
  });

  it('has back to blog link pointing to the site root', () => {
    cy.get('#backtoblog').should('be.visible')
      .find('a')
      .should('have.attr', 'href', 'https://student.michaelkentburns.com/');
  });
});
