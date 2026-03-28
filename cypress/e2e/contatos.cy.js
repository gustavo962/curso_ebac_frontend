describe('Agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('Gustavo Souza')
    cy.get('input[placeholder="E-mail"]').type('gustavo@email.com')
    cy.get('input[placeholder="Telefone"]').type('47999999999')

    cy.contains(/adicionar/i).click()

    cy.contains('Gustavo Souza').should('exist')
    cy.contains('gustavo@email.com').should('exist')
    cy.contains('47999999999').should('exist')
  })

  it('deve editar um contato', () => {
    cy.contains(/editar/i).click()

    cy.get('input[placeholder="Nome"]').clear().type('Gian Souza Editado')
    cy.get('input[placeholder="E-mail"]').clear().type('gianeditado@email.com')
    cy.get('input[placeholder="Telefone"]').clear().type('11999999999')

    cy.contains(/salvar/i).click()

    cy.contains('Gian Souza Editado').should('exist')
    cy.contains('gianeditado@email.com').should('exist')
    cy.contains('11999999999').should('exist')
  })

  it('deve remover um contato', () => {
    cy.contains(/deletar/i).click()

    cy.contains('3 contatos na agenda').should('not.exist')
  })
})