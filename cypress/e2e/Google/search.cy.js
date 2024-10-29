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

  it("search dynamic dropdown", () => {

    ///visit website
        cy.visit("https://www.google.com/")
    
        ///click searchbar 
        cy.get('#L2AGLb > .QS5gu').click()
    
    ////type inside searchbar
        cy.get("#APjFqb").type("cypress automation")
    
        cy.get("div.wM6W7d>span").shoukd("have.length", 11)
    
        ///show how many results of the word are/we use each() j query function
    ////we are reading each option with expected option if there are equal, clicks the option
    
        cy.get("div.wM6W7d>span").each(($el, index, $list)=>{  ///element, index, array
            if ($el.text()=="cypress automation tutorial")
            {
                cy.wrap($el).click()
            }
    
        })
    
        cy.get("#APjFqb").should("have.value","cypress automation tutorial")
    
    
    })

})