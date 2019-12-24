/*
TODO: 
deberia de tener asserts
deberia de capturar los mensajes de error
afterEach () => cy.get('#loggout').click()
                cy.get('#sign-in').click()

*/
describe('signIp', () => {
  beforeEach(() => {
    cy.visit('https://woloxbooksv3.firebaseapp.com/es/')
  });

  it('Successful sign In', () => {
    cy.get('#email').type('jose.garcia@wolox.co')
    cy.get('#password').type('123456')
    cy.get('#login').click()
  });
});
