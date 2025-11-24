describe('Fluxo - Cadastro de Funcionário', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.contains('+ Adicionar Funcionário').click();
    cy.contains('Adicionar Funcionário').should('be.visible');
  });

  it('Deve preencher todos os dados e salvar', () => {

    // Dados principais
    cy.get('input[name="nome"]').type('João Teste QA');
    cy.get('input[name="cpf"]').type('12345678901');
    cy.get('input[name="rg"]').type('9876543');

    // Data de nascimento (campo deve permitir digitação)
    cy.get('input[name="dataNascimento"]').type('01011990');

    // Sexo
    cy.contains('Masculino').click();

    // Cargo
    cy.get('select[name="cargo"]').select('Cargo 01');

    // Atividade
    cy.get('select[name="atividade"]').select('Ativid 01');

    // EPI
    cy.get('select[name="epi"]').select('Capacete de segurança');
    cy.get('input[name="numeroCa"]').type('556677');

    cy.contains('Adicionar EPI').click();

    // Salvar
    cy.contains('Salvar').click();

    // Validação
    cy.contains('Funcionário cadastrado com sucesso', { timeout: 8000 })
      .should('be.visible');
  });

});
