/*
TODO: 
deberia de capturar los mensajes de error
deberia capturar la url en formato https://woloxbooksv3.firebaseapp.com/es/books/18
afterEach () => implementarlo??

*/

describe('Home data detail', () => {
  beforeEach(() => {
    cy.visit('https://woloxbooksv3.firebaseapp.com/es/')
    cy.get('#email').type('jose.garcia@wolox.co')
    cy.get('#password').type('123456')
    cy.get('#login').click()
    cy.get('#book_item').click()
  });
 
  it('should have at least one', () => {
    cy.get('.genre').should('have.length', 1)
    cy.get('.sub-title').should('have.length', 3)
  });
  
});