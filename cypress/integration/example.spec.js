describe('Example Test', () => {
  beforeEach(() => {
    // controller.navigate('https://example.cypress.io');
  });

  it('finds the content "type"', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('.login').click();
    cy.get('#email_create').type('a@ae.com');
    cy.get('#SubmitCreate').click();
    cy.get('[name=company]').type('Wolox');
    cy.get('#id_gender2').check();
    cy.get('#customer_firstname').type('Edwin');
    cy.get('#customer_lastname').type('Gomez');
    cy.get('#passwd').type('holaMund*');
    cy.get('#firstname').type('First Name');
    cy.get('#lastname').type('Last Name');
    cy.get('#address1').type('Address address 123');
    cy.get('#city').type('Medellin');
  });
});
