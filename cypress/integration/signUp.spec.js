/*
TODO: 
deberia de tener asserts
deberia de capturar los mensajes de error
*/
describe('signUp', () => {
  beforeEach(() => {
    cy.visit('https://woloxbooksv3.firebaseapp.com/es/')
  });

  it('Succesful sign Up', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type('Jose')
    cy.get('#lastname').type('Garcia')
    cy.get('#email').type('jose.garcia@wolox.co')
    cy.get('#password').type('123456')
    cy.get('#submit_register').click()
  });

  it('needs to fill completly', () => {
    cy.get('#submit_register').click()
  });

  it('must have a name value', () => {
    cy.get('#sign-up').click()
    cy.get('#lastname').type('Garcia')
    cy.get('#email').type('jose.garcia@wolox.co')
    cy.get('#password').type('123456')
    cy.get('#submit_register').click()
  });

  it('should have a valid name', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type('123121')
    cy.get('#lastname').type('Garcia')
    cy.get('#email').type('jose.garcia@wolox.co')
    cy.get('#password').type('123456')
    cy.get('#submit_register').click()
  });

  it('should have a valid email', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type('jose')
    cy.get('#lastname').type('Garcia')
    cy.get('#email').type('jose.garcia')
    cy.get('#password').type('123456')
    cy.get('#submit_register').click()
  });

  it('should have a strong password', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type('123121')
    cy.get('#lastname').type('Garcia')
    cy.get('#email').type('jose.garcia@wolox.co')
    cy.get('#password').type('123')
    cy.get('#submit_register').click()
  });
})