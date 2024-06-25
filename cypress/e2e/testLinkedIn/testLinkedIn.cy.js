describe('Site LinkedIn.com', () => {

  it('should open LinkedIn.com', () => {

    cy.visit('https://www.linkedin.com');

    cy.get('[action-type="ACCEPT"]').click();

    cy.get('.nav__button-secondary').click();


  })

})