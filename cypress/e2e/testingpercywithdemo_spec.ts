describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.percySnapshot('Vinod_testing_with_percy')
  })
})