describe("Validação CPF", () => {
  it("deve exibir erro ao inserir CPF inválido", () => {
    cy.visit("/");

    cy.get('input[name="cpf"]').type("12345678900");
    cy.get('button[type="submit"]').click();

    cy.contains("CPF inválido").should("be.visible");
  });
});

//Validação CPF ocorreu erro! deve exibir erro  ao inserir CPF inválido! Evidencia de execução em evidencias-de-testes -> ET6_AutomacaoCypress -> ET6_AutomacaoCypress_1.1
