import { loadHTMLContent } from "../../scripts/my-js/control-page/change-.js";

describe("getCurrentState functionality", () => {
  beforeEach(() => {
    cy.visit("https://localhost:5501/index-invisible.html");
    cy.stub(window, "loadHTMLContent").returns(null); // Customize return value as needed
  });

  it("test load html content", () => {
    loadHTMLContent("/pages/call/incoming.html"); // Call the function even though it's stubbed
    cy.contains("p", "Incoming call").should("exist"); // Assert the expected behavior
  });

  // Additional tests can follow a similar structure
});
