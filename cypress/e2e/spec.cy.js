describe('template spec', () => {
  it('Chrome', { browser: 'electron' }, () => {
    cy.visit('https://example.cypress.io')
  })
  it('Electron', { browser: 'electron' }, () => {
    cy.visit('https://google.com')
  })
})
