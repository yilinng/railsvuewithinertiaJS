describe('home.spec.js', () => {
  it('should visit home.page', () => {
    cy.visit('/')

    cy.get('h1').contains('Home Page')
    cy.contains('InertiaApp').should('have.attr', 'href', '/')
    cy.contains('Signup').should('have.attr', 'href', '/signup')
    cy.contains('Login').should('have.attr', 'href', '/login').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/login')
  })
})