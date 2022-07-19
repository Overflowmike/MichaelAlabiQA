/// <reference types = "Cypress" />

const { func } = require("assert-plus")
const { select } = require ("async")
const { any } = require("bluebird")

describe("Seamless Valid Log In", function (){

    it('Valid Log In', function(){

       //Launch URL
cy.visit("https://the-internet.herokuapp.com/")

        //Click Form Authentication
        cy.get(':nth-child(21) > a').click()

//Login with Username

cy.get("#username").type('tomsmith')

//Enter Password
cy.get('#password').type('SuperSecretPassword!')

//Click on Login button
cy.get('.fa').click()
cy.wait(5000)

//assert the success message
cy.get('#flash').should('have.text',  '\n            You logged into a secure area!\n            ×\n          ')


    

    })
})