/// <reference types="cypress" />
import {MainPage} from "../Page-objects/main"
import {ShiftingPage} from "../Page-objects/Shifting"

describe("Tests de login", () =>{
    const shiftingPage = new ShiftingPage()
    const mainPage = new MainPage()

    beforeEach(() =>{ 
        mainPage.navigate()
        mainPage.clickShiftingOption()
    })

    it("Shifting content", () =>{
        shiftingPage.ClickMenu1()
        shiftingPage.CountElement()
    })

})
