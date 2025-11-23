describe("Teste da página principal", () => {
  beforeEach(() => {
    cy.visit("https://analista-teste.seatecnologia.com.br/")
  })

  it("Verifica se a página carregou corretamente", () => {
    cy.contains("Login").should("be.visible")
  })
})
