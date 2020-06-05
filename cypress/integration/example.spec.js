import Example from '../page-objects/example';

describe('Example Test', () => {
  const controller = new Example();
  beforeEach(() => {
    controller.navigate('https://example.cypress.io');
  });

  it.only('finds the content "type"', () => {
    cy.contains('type');
  });
});
