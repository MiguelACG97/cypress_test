export class LoginPage {
    FillUser (text) {
        cy.get('#username').type(text)
    }
    FillPass (text) {
        cy.get("#password").type(text)
    }
    ClickLoginButton() {
        cy.get(".fa").click()
    }

    
}