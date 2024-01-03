describe('template spec', () => {
  it('passes', { browser: 'chrome' } () => {
    cy.visit('https://example.cypress.io')
  })
  it('passes', { browser: 'electron' }, () => {
    cy.visit('https://google.com')
  })
})
