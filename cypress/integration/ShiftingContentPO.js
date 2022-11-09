/// <reference types="cypress" />
import {MainPage} from "../Page-objects/main"
import {ShiftingPage} from "../Page-objects/Shifting"
import {MenuElement} from '../Page-objects/MenuElement'


describe("Tests de login", () =>{
    const shiftingPage = new ShiftingPage()
    const mainPage = new MainPage()
    const menuElement = new MenuElement()

    beforeEach(() =>{ 
        mainPage.navigate()
        mainPage.clickShiftingOption()
    })

    it("Shifting content", () =>{
        shiftingPage.ClickMenu1()
        menuElement.CountElement()
    })

})
