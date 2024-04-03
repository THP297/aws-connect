describe("Task Page Functionality", () => {
  beforeEach(() => {
    cy.visit("https://localhost:5501/index-invisible.html");
  });

  it("user can go to task page and create new task", () => {
    cy.get("#task-page").click();
    cy.get("#task-wrapper").should("exist");
    cy.contains("p", "Create task").should("exist");

    cy.get("#add-task").click();
    cy.get("#main-container").get("#wrapper").should("exist");
  });
});
