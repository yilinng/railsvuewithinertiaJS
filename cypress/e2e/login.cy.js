describe('the login page', () => {
  it('user can authenticate using the login and logout', () => {
    const email = 'test12@test.com'
    const password = 'test12'
    cy.visit('/login')

    // Fill out the form
    cy.get('input[id=email]').type(email)
    cy.get('input[id=password]').type(`${password}`)

    // Click the sign-in button
    cy.get('button[type=submit]').click()

    //show logout and notes
    cy.contains('Notes').should('have.attr', 'href', '/notes')
    cy.get('.navbar button').contains('Logout')

    //show login success
    cy.get('.notice p').should('contain', 'Logged in successfully.')

    // Click logout
    cy.get('.navbar button').contains('Logout').click()

    //show logout success
    cy.get('.notice p').should('contain', 'You have been logged out.')
  })

  it('input invalid email', () => {
    const email = 'test125yh@test.com'
    const password = 'test123'

    cy.visit('/login')

    // Fill out the form
    cy.get('input[id=email]').type(email)
    cy.get('input[id=password]').type(`${password}`)

    // Click the sign-in button
    cy.get('button[type=submit]').click()

    //login page will show 'cannot find user, please sign up'
    cy.get('.alert p').should('contain', 'Invalid email or password.')
  })

  it('expect login failed with missing email', () => {
    //const email = 'test1234@test.com';
    const password = 'test123'

    cy.visit('/login')

    // Fill out the form
    //cy.get('input[id=email]').type(email);
    cy.get('input[id=password]').type(`${password}`)

    // Click the sign-in button
    cy.get('button[type=submit]').click()

    //login page will show 'cannot find user, please sign up'
    cy.get('.text-red-500').should('contain', 'email have to input..')
  })

  it('expect login failed with missing password', () => {
    const email = 'test125yh@test.com'
    //const password = ''

    cy.visit('/login')

    // Fill out the form
    cy.get('input[id=email]').type(email)
    //cy.get('input[id=password]').type(`${password}`);

    // Click the sign-in button
    cy.get('button[type=submit]').click()

    //login page will show 'cannot find user, please sign up'
    cy.get('.text-red-500').should('contain', 'password have to input..')
  })

  it('expect redirect to login page', () => {
    cy.visit('/notes')

    cy.url().should('include', '/login')

    cy.get('.notice p').should('contain', 'You must be logged in to perform that action.')
  })
})
