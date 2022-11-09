
export class MenuElement {
    
    CountElement() {
        cy.get('ul').find('li').its('length').should('eq', 5)
    
    }
    

    
}

