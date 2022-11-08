export class ShiftingPage {

    ClickMenu1() {
        cy.get('[href="/shifting_content/menu"]').click()
    
    }

    CountElement() {
        cy.get('ul').find('li').its('length').should('eq', 5)
    
    }
}