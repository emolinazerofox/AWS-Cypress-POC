describe('template spec', () => {
  it('passes',{ browser: 'electron' } , () => {
    cy.visit('https://cloud-qa.zerofox.com')
  })
})
