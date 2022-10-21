import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Contact from "../../src/user_interfaces/ContactPage";

Given('the user is on the demoblaze contact page', () => {
  cy.visit("/");
  cy.isClickable(Contact.contactButton());
});

When('the user sends the message with {string} ,{string} and {string}', (contactEmail: string, contactName: string, message: string) => {
  cy.fillContactForm(contactEmail, contactName, message);
});

Then('the user verify that the menu is displayed again', () => {
  cy.isMenuDispleyed();
});
