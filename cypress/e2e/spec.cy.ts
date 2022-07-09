describe('Testes da pagina http://localhost:3000 ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Se ao renderizar eu clicar em #remove-count deve ser igual a 0', () => {
    cy.get("#remove-count").click()
    cy.get("#count-div").should("contain","0")
  })
  it('Se ao renderizar eu clicar em #add-count deve ser igual a 1', () => {
    cy.get("#add-count").click()
    cy.get("#count-div").should("contain","1")
  })
  it('Se ao renderizar eu duas vezes clicar em #add-count e depois #remove-count deve ser igual a 0',  () => {
    cy.get("#add-count").click()
    cy.get("#add-count").click()
    cy.get("#count-div").should("contain","2")
    cy.get("#remove-count").click()
    cy.get("#count-div").should("contain","1")
  })
})