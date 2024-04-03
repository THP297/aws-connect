describe("Settings Page Functionality", () => {
  beforeEach(() => {
    cy.visit("https://localhost:5501/index-invisible.html");
  });

  it("user can direct to settings page and change phone, language settings", () => {
    cy.get("#settings-page").click();
    cy.get("body").get("h1").contains("Settings").should("be.visible");

    cy.get("#phoneTypeDeskphone").click();
    cy.get("#phone-form").should("be.visible");

    cy.get("#phoneTypeSoftphone").click();
    cy.get("#phone-form").should("not.be.visible");

    cy.get("#language-dropdown-btn").click();
    cy.get(".language-dropdown-options").should("be.visible");

    cy.get(".language-dropdown-options ul li").first().click();

    cy.get("#language").should("have.text", "English");
    cy.get(".language-dropdown-options").should("not.be.visible");

    cy.get("#phoneTypeSoftphone").click();
    cy.get("#phone-form").should("not.be.visible");
  });
});
