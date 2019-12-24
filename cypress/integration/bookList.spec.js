/*
TODO: 
deberia de capturar los mensajes de error
afterEach () => implementarlo??

*/

describe('Home data', () => {
  beforeEach(() => {
    cy.visit('https://woloxbooksv3.firebaseapp.com/es/')
    cy.get('#email').type('jose.garcia@wolox.co')
    cy.get('#password').type('123456')
    cy.get('#login').click()
  });
 
  it('should have at least one', () => {
    cy.get('app-book-card').should('have.length', 5)
  });
  
});
