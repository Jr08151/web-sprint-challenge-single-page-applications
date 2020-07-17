describe("Inputs and submit button", () => {
    it("can navigate to the site", () => {
        cy.visit("http://localhost:3001/pizza")
        cy.url().should("include", "localhost")
    })

    it("can enter a name in", () => {
        cy.get("input[name=name]").type("jonathan")  
        cy.get("input[name=name]").should("have.value", "jonathan") 
    })
    it("can enter instructions", () => {
        cy.get("textarea[name=instructions]").should("be.empty")
    })
    it('submit button should be disabled', () => { // second test
        cy.get('button').should('be.disabled')
      })
    
})