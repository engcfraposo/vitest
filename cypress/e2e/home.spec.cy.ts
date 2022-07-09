describe('Teste de fluxo da pagina de Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it("Se eu renderizar a pagina de Home e clicar no botão de menos o valor não muda",() => {
    cy.get('#remove-count').click()
    cy.get("#count-div").should("contain", "0")
  })
  it("Se eu renderizar a pagina de Home e clicar no botão de mais o valor de ser um", () => {
    cy.get('#add-count').click()
    cy.get("#count-div").should("contain", "1")
  })
  it("Se eu renderizar a pagina de Home e clicar duas vez no botão mais e uma vez no clicar no botão menos o valor deve ser um",()=> {
    cy.get('#add-count').click()
    cy.get("#count-div").should("contain", "1")
    cy.get('#add-count').click()
    cy.get("#count-div").should("contain", "2")
    cy.get('#remove-count').click()
    cy.get("#count-div").should("contain", "1")
  })
  //it("exemplo", () => {
    //cy.get("#login").type("Ziriguidunho")
    //cy.get("#password").type("safaf33455a")
    //cy.get("#submit").submit()
    //cy.get("form").should
  //})
})