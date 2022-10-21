import Login from "../user_interfaces/LoginPage";

Cypress.Commands.add("loginAs", (user: string, password: string) => {
  cy.get(Login.loginButtonMenu()).click();
  cy.get(Login.usernameInput())
    .should("not.be.disabled")
    .type(user, { force: true });
  cy.get(Login.passwordInput())
    .should("not.be.disabled")
    .type(password, { force: true });
  cy.get(Login.loginButton()).click();
});
