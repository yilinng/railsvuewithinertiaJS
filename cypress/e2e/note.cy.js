
describe('note page', () => {
  
  beforeEach(() => {
    cy.login()
    cy.contains('Notes').should('have.attr', 'href', '/notes').click()
    cy.url().should('include', '/notes')
  })

  afterEach(() => {
    cy.logout()
  })
  
  it('user can authenticate visit note.page', () => {

    cy.get('h2').contains('Notes')

    cy.contains('New Note').should('have.attr', 'href', '/notes/new')
    cy.contains('Home').should('have.attr', 'href', '/')
  })


  it('create new note success', () => {

    cy.contains('New Note').should('have.attr', 'href', '/notes/new').click();

    // includes '/commands/actions'
    cy.url().should('include', '/notes/new')

    const title = 'test125yh@test.com';
    const content = `By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to accept or decline it.`
     
    // Fill out the form
    cy.get('input[id=title]').type(title);
    cy.get('textarea').type(content);

    cy.get('button[type=submit]').click();

    cy.get('.notice p').should('contain', 'Note was successfully created.')

    cy.url().should('include', '/notes');

  })

  it('create new note but missing title', () => {

    cy.contains('New Note').should('have.attr', 'href', '/notes/new').click();

    // includes '/commands/actions'
    cy.url().should('include', '/notes/new')

    const title = 'test125yh@test.com';
    const content = `By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to accept or decline it.`
     
    // Fill out the form
    //cy.get('input[id=title]').type(title);
    cy.get('textarea').type(content);

    cy.get('button[type=submit]').click();

    cy.get('.titleErr').should('contain', 'title have to input..')

  })

  it('create new note but missing content', () => {

    cy.contains('New Note').should('have.attr', 'href', '/notes/new').click();

    // includes '/commands/actions'
    cy.url().should('include', '/notes/new')

    const title = 'test125yh@test.com';
    const content = `By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to accept or decline it.`
     
    // Fill out the form
    cy.get('input[id=title]').type(title);
    //cy.get('textarea').type(content);

    cy.get('button[type=submit]').click();

    cy.get('.contentErr').should('contain', 'content have to input..')

  })

  
  it('update note success', () => {

    cy.get('tr>td').eq(2).contains('Edit').first().click()

    const title = 'update title...from cypress';
    const content = `update content...from cypress`
     
    // Fill out the form
    cy.get('input[id=title]').clear().type(title);
    cy.get('textarea').clear().type(content);

    cy.get('button[type=submit]').click();

    cy.get('.notice p').should('contain', 'Note was successfully update.')

  })

  it('show note success', () => {

    cy.get('tr>td').eq(2).contains('Show').first().click()

    const title = 'update title...from cypress';
    const content = `update content...from cypress`
     
    // Fill out the form
    cy.get('.title').contains(title);
    cy.get('article').contains(content);

  })

  it('delete note success', () => {

    cy.get('tr>td').eq(2).contains('Delete').first().click()

    cy.get('.notice p').should('contain', 'Note was successfully destroyed.')

  })


})