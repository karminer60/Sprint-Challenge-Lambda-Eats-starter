describe('Form inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
      })

    it('can type a username', () => {
        cy.get('input[name="username"]')
            .type('Lady Gaga')
            .should('have.value', 'Lady Gaga')
        
    })
   

    it('checkbox verification', ()=>{
        
        cy.get('input[name="mushrooms"]').check()
            .should('have.attr', 'checked')
        cy.get('input[name="pineapples"]').check()
            .should('have.attr', 'checked')
        cy.get('input[name="salami"]').check()
            .should('have.attr', 'checked')
        cy.get('input[name="jalapenos"]').check()
            .should('have.attr', 'checked')
    })

    it('submit form verification', ()=>{
        cy.get('form').submit()
            
    })

    

})

