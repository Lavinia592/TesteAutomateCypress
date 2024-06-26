describe('Site LinkedIn.com', () => {

  it('should open LinkedIn.com', () => {
    //Opens website
    cy.visit('https://www.linkedin.com');

    //Accept pop up alert
    cy.get('[action-type="ACCEPT"]').click();

    //clicks sign in button
    cy.get('.nav__button-secondary').click();

    //types username
    cy.get('#username').type('******');

    //types password
    cy.get('#password').type('*****');

    //clicks sign in button to enter account
    cy.get('.btn__primary--large').click();

    //clicks Me icon     
    cy.get('#ember16').click();

    //clicks sign out     
    cy.get('.global-nav__secondary-item--divider > .global-nav__secondary-link').click();





  })

})