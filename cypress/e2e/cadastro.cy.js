/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

beforeEach(() => {
    cy.visit("register.html")
});

it('Deve fazer cadastro com sucesso, usando função JS', () => {
    let email = `teste${Date.now()}@teste.com`
    cy.get('#name').type("Guilherme")
    cy.get('#email').type(email)
    cy.get('#phone').type("34998101476")
    cy.get('#password').type("Teste12345")
    cy.get('#confirm-password').type("Teste12345")
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    //Resultado esperado
    cy.url().should("include", "dashboard")

});

it('Deve fazer cadastro com sucesso, usando Faker', () => {
    let nome = faker.person.fullName()
    let email = faker.internet.email()
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type("34998101476")
    cy.get('#password').type("Teste12345")
    cy.get('#confirm-password').type("Teste12345")
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    //Resultado esperado
    cy.url().should("include", "dashboard")
    cy.get('#user-name').should('contain', nome)
});



});