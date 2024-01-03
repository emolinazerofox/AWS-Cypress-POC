describe('template spec', () => {
  it('Chrome', { browser: 'chrome' }, () => {
    cy.visit('https://example.cypress.io')
  })
  it('Electron', { browser: 'electron' }, () => {
    cy.visit('https://google.com')
  })
})
