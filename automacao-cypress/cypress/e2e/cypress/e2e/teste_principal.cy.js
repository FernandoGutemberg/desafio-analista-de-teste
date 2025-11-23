describe("Validação CPF", () => {
  it("deve exibir erro ao inserir CPF inválido", () => {
    cy.visit("/");

    cy.get('input[name="cpf"]').type("12345678900");
    cy.get('button[type="submit"]').click();

    cy.contains("CPF inválido").should("be.visible");
  });
});
