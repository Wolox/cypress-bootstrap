import ContactPage from "../user_interfaces/ContactPage";

Cypress.Commands.add("acceptPopUp", () => {
  cy.on("window:alert", (alertText) => {
    expect(alertText).to.eql("Thanks for the message!!");
  });
  cy.get("button#alert").click();
});

Cypress.Commands.add(
  "fillContactForm",
  (email: string, name: string, message: string) => {
    cy.get(ContactPage.emailInput())
      .should("not.be.disabled")
      .type(email, { force: true });
    cy.get(ContactPage.nameInput())
      .should("not.be.disabled")
      .type(name, { force: true });
    cy.get(ContactPage.messageInput())
      .should("not.be.disabled")
      .type(message, { force: true });

    cy.contains(ContactPage.sendMessageButton()).click({ force: true });
  }
);
