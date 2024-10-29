describe('Site LinkedIn.com', () => {

  it('should open LinkedIn.com', () => {

    //opens website
    cy.visit('https://www.linkedin.com');

    //clicks accept on the pop up window
    cy.get('[action-type="ACCEPT"]').click();

    cy.get('.nav__button-secondary').click();


  })

})