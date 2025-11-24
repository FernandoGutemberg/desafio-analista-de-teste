describe('Cadastro de EPI', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.contains('+ Adicionar Funcionário').click();
  });

  it('Deve adicionar 2 EPIs para um funcionário', () => {

    cy.get('select[name="atividade"]').select('Ativid 01');
    cy.get('select[name="epi"]').select('Capacete de segurança');
    cy.get('input[name="numeroCa"]').type('11111');
    cy.contains('Adicionar EPI').click();

    cy.get('select[name="atividade"]').select('Ativid 02');
    cy.get('select[name="epi"]').select('Luva de proteção');
    cy.get('input[name="numeroCa"]').type('22222');
    cy.contains('Adicionar EPI').click();

    cy.get('.epi-item').should('have.length', 2);
  });

});
