describe("Audio Player", () => {
  it("Plays audio", () => {
    cy.visit("/");

    cy.get(".composition-name:last").click();
    cy.get("#play-btn").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(50000);
    cy.get("#player-play-btn").click();
  });
});
