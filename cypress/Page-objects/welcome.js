export class WelcomePage {
    CheckMessage(text) {
        cy.get("#flash").contains(text)

    }



    
}