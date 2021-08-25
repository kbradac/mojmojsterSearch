context('Window', () => {
  beforeEach(() => {
    cy.visit('https://www.mojmojster.net/')
  })

  it('cy.window() - get the global window object', () => {
    // https://www.mojmojster.net/
    cy.window().should('have.property', 'top')
  })

})
