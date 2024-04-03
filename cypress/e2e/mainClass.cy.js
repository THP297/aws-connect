describe("Main Page Functionality", () => {
  beforeEach(() => {
    cy.visit("https://localhost:5501/index-invisible.html");
  });

  it("initializes currentState in localStorage", () => {
    cy.window().should((win) => {
      expect(win.localStorage.getItem("current-call-state")).to.eq("main");
    });
  });

  it("correctly cycles number pad button", () => {
    cy.get("#connects").click();

    cy.get("#main-container").within(() => {
      cy.get("#change-feature").should("be.visible");
      cy.contains("p", "Number pad").should("be.visible");
    });

    cy.get("#change-feature").click();

    cy.get("#main-container").within(() => {
      cy.get("#change-feature").should("be.visible");
      cy.contains("p", "Quick connects").should("be.visible");
    });

    cy.get("#change-feature").click();

    cy.get("#main-container").within(() => {
      cy.get("#change-feature").should("be.visible");
      cy.contains("p", "Number pad").should("be.visible");
    });
  });

  it("correctly cycles quick connects button", () => {
    // Initial click on #connects to load the first feature
    cy.get("#pad").click();

    // Verify #main-container now contains #change-feature and the text "Number pad"
    cy.get("#main-container").within(() => {
      cy.get("#change-feature").should("be.visible");
      cy.contains("p", "Quick connects").should("be.visible");
    });

    // Click on #change-feature to change to the next feature
    cy.get("#change-feature").click();

    // Verify #main-container updates to contain #change-feature and the text "Quick connects"
    cy.get("#main-container").within(() => {
      cy.get("#change-feature").should("be.visible");
      cy.contains("p", "Number pad").should("be.visible");
    });

    // Click on #change-feature again to loop back
    cy.get("#change-feature").click();

    // Verify #main-container loops back to contain #change-feature and the text "Number pad"
    // Adjust this part if the actual loop back should show "Quick connects" instead or some other state
    cy.get("#main-container").within(() => {
      cy.get("#change-feature").should("be.visible");
      cy.contains("p", "Quick connects").should("be.visible");
    });
  });
});
