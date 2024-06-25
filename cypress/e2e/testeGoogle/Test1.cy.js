describe('Site-ul Google.com', () => {

  //Testul numarul 1
  it('functioneaza cu o cautare basic', () => {

    //Deschide pagina google.com
    cy.visit('www.google.com');

    //da accept la fereastra pop up de la google si initiaza click
    cy.get('#L2AGLb').click();

    //accesam search-ul folosind clasa gLF.. lansam tiparirea pe site pt a cauta vlog de it apoi lansam enter ul
    cy.get('.gLFyf').type('vlog de it').type('{enter}');

    cy.get('#result-stats').should('exist');
  })


})