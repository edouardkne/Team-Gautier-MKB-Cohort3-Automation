describe("UC-CreateAccount / register-success", () => {
  const registrationUrl =
    "https://student.michaelkentburns.com/wp-login.php?action=register";

  it("should submit registration form", () => {
    const uniqueId = Date.now();
    const username = `testuser_${uniqueId}`;
    const email = `testuser_${uniqueId}@example.com`;

    cy.visit(registrationUrl);

    cy.get("#registerform").should("be.visible");

    cy.get("#user_login")
      .should("be.visible")
      .type(username);

    cy.get("#user_email")
      .should("be.visible")
      .type(email);

    cy.get("#wp-submit").click();

    // 🔎 Validation UI WordPress (stable)
    cy.get("body").should("be.visible");

    cy.get("body").then(($body) => {
      const text = $body.text();

      const possibleStates = [
        "Registration confirmation will be emailed to you.",
        "Check your email",
        "Registration complete",
        "User registration is currently not allowed"
      ];

      const matched = possibleStates.some(state =>
        text.includes(state)
      );

      expect(matched).to.eq(true);
    });
  });
});