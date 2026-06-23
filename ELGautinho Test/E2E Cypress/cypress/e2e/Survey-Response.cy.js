describe("Survey archive and access", () => {
  beforeEach(() => {
    cy.visit("https://student.michaelkentburns.com/survey/");
  });

  it("displays the survey archive with survey summaries", () => {
    cy.contains("Archives: Surveys").should("be.visible");
    cy.contains("Test 1").should("be.visible");
    cy.contains("How satisfied are you with the course content?").should(
      "be.visible",
    );
    cy.contains("Would you recommend this course to another student?").should(
      "be.visible",
    );
    cy.contains("What did you like most about this course?").should(
      "be.visible",
    );
  });

  it("opens a survey and shows a permission message when access is restricted", () => {
    cy.contains("Test 1").click();
    cy.contains("You do not have permission to view this survey !").should(
      "be.visible",
    );
  });
});
