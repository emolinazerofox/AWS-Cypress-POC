describe('template spec', () => {
  it('Chrome',{ browser: 'electron' } , () => {
    cy.visit('https://cloud-qa.zerofox.com')
  })
})
