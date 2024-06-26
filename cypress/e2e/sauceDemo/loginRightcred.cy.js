describe('SauceDemo Website', () => {

  it('should login', () => {

    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type('standard_user');

    cy.get('#password').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    //cy.screenshot();


  })
})