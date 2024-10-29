describe("Orange HRM URL and Title check, login wrond and right credentials", ()=>{

    it("Check if URL is correct" , () => {

        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") ///visit website

        cy.url().should("include","orangehrmlive.com")  //checks if this part is part of my url
        .should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .should("contain","orangehrm")  //checks if the particular text is present in the url or not
        .should("not.contain","orangehrm123") //negative assertion 
     
    })


    it("Check if Title of website is correct" , () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should("include","Orange") //checks if specific words are present in the title
        .and("eq","OrangeHRM")
        .and("contain","HRM")

        cy.get('.orangehrm-login-branding > img').should("be.visible")  //checks if logo is visible
        .and("exist")    //checks visibility of logo (another option for exist is be.visible)

    })


    it("login with right credentials", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  ///open website

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")   ///types username

        .should("have.value", "Admin")  //checks if value is correct

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123") ///types password

        cy.get('.oxd-button').click() ///clicks login button

})


    it("login with wrong credentials", ()=>{

   
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  ///open website

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("user") ///types username

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin1213e2") ///types password

        cy.get('.oxd-button').click() ///click on login button
        cy.get('.oxd-alert').contains("Invalid credentials") //check alert for wrong credentials
        cy.screenshot()  //takes screenshot
    
})

})