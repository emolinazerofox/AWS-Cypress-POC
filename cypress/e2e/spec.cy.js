describe('template spec', () => {
  it('Electron', { browser: 'electron' }, () => {
    cy.visit('https://example.cypress.io')
  })
  it('Chrome', { browser: 'chrome' }, () => {
    cy.visit('https://google.com')
  })
})
