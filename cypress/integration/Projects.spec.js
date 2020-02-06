describe('Projects View', () => {
  before(() => {
    // Go to home page
    cy.visit('/');
  });

  it('Shows RTDB projects', () => {
    cy.get('[data-test=rtdb-projects]').should('exist')
  });

  it('Shows firestore projects', () => {
    cy.get('[data-test=firestore-projects]').should('exist')
  });
});
