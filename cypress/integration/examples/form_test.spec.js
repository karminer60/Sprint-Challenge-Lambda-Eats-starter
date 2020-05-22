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
        cy.get('[type="checkbox"]').check()
            
    })

    it('submit form verification', ()=>{
        cy.get('form').submit()
            
    })

    

})

