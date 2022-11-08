/// <reference types="cypress" />
import {MainPage} from "../Page-objects/main"
import {LoginPage} from "../Page-objects/login"
import {WelcomePage} from "../Page-objects/welcome"



describe("Tests de login", () =>{
    const loginPage = new LoginPage()
    const mainPage = new MainPage()
    const welcomePage = new WelcomePage()
    
    
    beforeEach(() =>{ 
        mainPage.navigate()
        mainPage.clickLoginOption()

    }) 
    it("A valid user can login", () =>{
        loginPage.FillUser('tomsmith')
        loginPage.FillPass('SuperSecretPassword!')
        loginPage.ClickLoginButton()
        welcomePage.CheckMessage('You logged into a secure area!')


    })
    it("A not valid user try login", () =>{
        loginPage.FillUser("tomsmith")
        loginPage.FillPass("123")
        loginPage.ClickLoginButton()
        welcomePage.CheckMessage("Your password is invalid!")


    })
    it("Invalid User", () =>{
        loginPage.FillUser("123")
        loginPage.FillPass("123")
        loginPage.ClickLoginButton()
        welcomePage.CheckMessage("Your username is invalid!")


    })
    it("Empty User and password", () =>{
        loginPage.FillUser('have.value', '')
        loginPage.FillPass('have.value', '')
        loginPage.ClickLoginButton()
        welcomePage.CheckMessage("Your username is invalid!")
    })

    
})     