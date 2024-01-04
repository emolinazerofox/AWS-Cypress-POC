describe('template spec', () => {
  it('Chrome',{ browser: 'electron' } , () => {
    cy.visit('https://www.zerofox.com')
  })
})
