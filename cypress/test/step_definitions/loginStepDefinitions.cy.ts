import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Inventory from "../../src/user_interfaces/InventoryPage";
import login from "../../src/utils/constants/login";
import environment from "../../src/utils/constants/environmentVariables";

Given("the user is on the demoblaze login page", () => {
  cy.visit("/");
});
When("the user login with role standard", () => {
  cy.loginAs(environment._USER_STANDARD, environment._STANDARD_PASSWORD);
});
Then("the user verify that the text Welcome is displayed on the screen", () => {
  cy.containsTheText(Inventory.userName(), login.WELCOME_MESSAGE);
});
