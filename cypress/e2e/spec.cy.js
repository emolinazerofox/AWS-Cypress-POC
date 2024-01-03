describe('template spec', { browser: 'firefox' }, () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  it('passes', { browser: 'electron' }, () => {
    cy.visit('https://google.com')
  })
})
