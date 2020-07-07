/// <reference types="Cypress" />
export class BasePage{
    open(urlAddress){
        cy.visit(urlAddress)
    }

    // scrollIntoView(locator){
    //     cy.get(locator).scrollIntoView().should('be.visible')
    // }

    click(locator){
        //scrollIntoView(locator)
        cy.get(locator).scrollIntoView().should('be.visible', {force: true})
        cy.get(locator).click({force: true})
    }

    type(locator, text){
        // scrollIntoView(locator, Text)
        cy.get(locator).scrollIntoView().should('be.visible')
        cy.get(locator).clear({force: true})
        cy.get(locator).type(text, {force: true})
    }

    select(locator, value){
        // scrollIntoView(locator)
        cy.get(locator).scrollIntoView().should('be.visible')
        cy.get(locator).select(value,{force: true})
    }

    checkTextboxContains(locator, value){
        cy.get(locator).scrollIntoView().should('be.visible')
        cy.get(locator).should('contain.value', value)
    }

    typeInFrame(framelocator, locator, text){
        // Solution taken from
        // https://stackoverflow.com/questions/47325258/how-do-i-enter-data-into-a-form-input-in-an-iframe-using-cypress
        cy.get(framelocator).then($element => {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)
            stripe.find(locator).type('4242424242424242')
        })
    }
}