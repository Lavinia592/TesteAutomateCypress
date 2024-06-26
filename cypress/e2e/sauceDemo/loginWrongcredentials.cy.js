describe('SauceDemo Website', () => {

  it('should show error', () => {

    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type('standard_user');

    cy.get('#password').type('secret_sauc');
    cy.get('[data-test="login-button"]').click();

    //cy.screenshot();


  })
})