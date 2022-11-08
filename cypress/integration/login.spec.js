/// <reference types="cypress" />


describe("Tests de login", () =>{
    beforeEach(() =>{ 
        cy.visit("https://the-internet.herokuapp.com")
        cy.get(':nth-child(21) > a').click()

    }) 
    it("A valid user can login", () =>{
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('.fa').click()
        cy.get('#flash').contains("You logged into a secure area!")


    })
    it("A not valid user try login", () =>{
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("123")
        cy.get('.fa').click()
        cy.get('#flash').contains("Your password is invalid!")


    })
    it("Invalid User", () =>{
        cy.get('#username').type("123")
        cy.get('#password').type("123")
        cy.get('.fa').click()
        cy.get('#flash').contains("Your username is invalid!")


    })
    it("Empty User and password", () =>{
        cy.get('#username').should('have.value', '')
        cy.get('#password').should('have.value', '')
        cy.get('.fa').click()
        cy.get('#flash').contains("Your username is invalid!")
    })

    
})     