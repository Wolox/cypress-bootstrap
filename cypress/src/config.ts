import "./tasks/login";
import "./questions/ensure";
import "./tasks/contact";
import "cypress-cucumber-tagging/src/support"

declare global {
  namespace Cypress {
    interface Chainable {
      containsTheText(selector: string, text: string): void;
      isClickable(selector: string): void;
      loginAs(user: string, password: string): void;
      acceptPopUp(): void;
      fillContactForm(email: string, name: string, message: string): void;
      isMenuDispleyed(): void;
    }
  }
}
