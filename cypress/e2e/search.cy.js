describe("Automation practice website",()=>{

    ///search for t-shirts 
it("search for T-shirts", ()=>{

    ///opens website
cy.visit("http://www.automationpractice.pl/index.php")


   ///acces search bar and types word
cy.get('#search_query_top').type("T-shirts").type('{enter}')

    ///verifies if message for search is correct
cy.get('.lighter').contains("T-shirts")

})

    ///search for dresses
it("search for dresses", ()=>{

    ///opens website
cy.visit("http://www.automationpractice.pl/index.php")

    ///acces search bar and types word
cy.get('#search_query_top').type("dresses").type('{enter}')

    ///verifies if message for search is correct
cy.get('.lighter').contains("dresses")

})

    ///search for blouses
it("search for blouses", ()=>{

    ///opens website
cy.visit("http://www.automationpractice.pl/index.php")
    
    ///acces search bar and types word
cy.get('#search_query_top').type("blouses").type('{enter}')
    
    ///verifies if message for search is correct
cy.get('.lighter').contains("blouse")
    
})

})