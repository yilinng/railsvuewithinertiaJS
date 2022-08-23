// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/*
Cypress.Commands.add("signup", () => {
  cy.request({
    method: 'POST',
    form: true,
    url: "/api/users/signup",
    headers: {
      'Content-Type': 'application/json'  
    },
    body: { 
      "name": "test from cypress",
      "email": "test123@test.com", 
      "password": "test123"
     }
  })
  .as('signupResponse')
  .then(response => {
    Cypress.env('token', response.body.accessToken); // either this or some global var but remember that this will only work in one test case
    Cypress.env('retoken', response.body.refreshToken); // either this or some global var but remember that this will only work in one test case
    console.log(response)
    return response;
  })
  .its('status')
  .should('eq', 201);

})
*/
Cypress.Commands.add("login", () => {
  const email = 'test12@test.com';
  const password = 'test12'
  cy.visit('/login')

    
  // Fill out the form
  cy.get('input[id=email]').type(email);
  cy.get('input[id=password]').type(`${password}`);

  // Click the sign-in button
  cy.get('button[type=submit]').click();
  
  //show logout and notes
  cy.contains('Notes').should('have.attr', 'href', '/notes')
  cy.get('.navbar button').contains('Logout')

  //show login success
  cy.get('.notice p').should('contain', 'Logged in successfully.')

})

Cypress.Commands.add("logout", () => {
  // Click logout
  cy.get('.navbar button').contains('Logout').click()

  //show login and signup
  cy.contains('Login').should('have.attr', 'href', '/login')
  cy.contains('Signup').should('have.attr', 'href', '/signup')

  //show logout success
  cy.get('.notice p').should('contain', 'You have been logged out.')
})