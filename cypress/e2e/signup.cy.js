
describe('the signup page', () => {

  it('user can authenticate using the signup and logout', () => {

    const username = 'test cypress';
    const email = 'test12@test12.com';
    const password = 'test12'
    cy.visit('/signup')
      
    // Fill out the form
    cy.get('input[id=username]').type(username);
    cy.get('input[id=email]').type(email);
    cy.get('input[id=password]').type(`${password}`);

    // Click the sign-in button
    cy.get('button[type=submit]').click();
    
    //show logout and notes
    cy.contains('Notes').should('have.attr', 'href', '/notes')
    cy.get('.navbar button').contains('Logout')

    //show login success
    cy.get('.notice p').should('contain', 'Logged in successfully.')
    
    // Click logout
    cy.get('.navbar button').contains('Logout').click()

    //show logout success
    cy.get('.notice p').should('contain', 'Signup in successfully.')

  })

  it('input invalid email', () => {

    const username = 'test cypress';
    const email = 'test12@test12.com';
    const password = 'test123'

    cy.visit('/signup')
    
    // Fill out the form
    cy.get('input[id=username]').type(username);
    cy.get('input[id=email]').type(email);
    cy.get('input[id=password]').type(`${password}`);
    
    // Click the sign-in button
    cy.get('button[type=submit]').click();

    //login page will show 'cannot find user, please sign up'
    cy.get('.alert p').should('contain', 'Invalid email or password.')
  })

})