describe('Fluxo - Abrir tela de cadastro de funcionário', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve acessar a tela de adicionar funcionário', () => {
    cy.contains('+ Adicionar Funcionário').click();
    cy.contains('Adicionar Funcionário').should('be.visible');
    cy.get('input[name="nome"]').should('exist');
  });

});