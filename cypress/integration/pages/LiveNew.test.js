import { randomLiveInfo } from '../../data-builders/lives.builder';

describe('Page LiveNew', () => {
  before(() => {
    cy.visit('/lives/new');
  });

  it('Should all errors in fields', () => {
    cy.get('button').click();

    cy.get('input[name="titleShort"] + span').contains('Título curto é obrigatório');
    cy.get('input[name="title"] + span').contains('Título é obrigatório');
    cy.get('input[name="photo"] + span').contains('Imagem é obrigatória');
    cy.get('input[name="startDate"] + span').contains('Data de início é obrigatória');
    cy.get('input[name="startTime"] + span').contains('Hora de início é obrigatória');
    cy.get('input[name="finishDate"] + span').contains('Data de fim é obrigatória');
    cy.get('input[name="finishTime"] + span').contains('Hora de fim é obrigatória');
    cy.get('textarea[name="goals"] + span').contains('Objetivos são obrigatórios');
    cy.get('textarea[name="description"] + span').contains('Descrição é obrigatória');
  });

  it('Should show the error in field when the field is missing', () => {
    cy.visit('/lives/new');
    cy.get('input[name="titleShort"]').focus();
    cy.get('input[name="title"]').focus();
    cy.get('input[name="titleShort"] + span').contains('Título curto é obrigatório');
    cy.get('input[name="photo"]').focus();
    cy.get('input[name="title"] + span').contains('Título é obrigatório');
    cy.get('input[name="startDate"]').focus();
    cy.get('input[name="photo"] + span').contains('Imagem é obrigatória');
    cy.get('input[name="startTime"]').focus();
    cy.get('input[name="startDate"] + span').contains('Data de início é obrigatória');
    cy.get('input[name="finishDate"]').focus();
    cy.get('input[name="startTime"] + span').contains('Hora de início é obrigatória');
    cy.get('input[name="finishTime"]').focus();
    cy.get('input[name="finishDate"] + span').contains('Data de fim é obrigatória');
    cy.get('textarea[name="goals"]').focus();
    cy.get('input[name="finishTime"] + span').contains('Hora de fim é obrigatória');
    cy.get('textarea[name="description"]').focus();
    cy.get('textarea[name="goals"] + span').contains('Objetivos são obrigatórios');
    cy.get('button').contains('Enviar').focus();
    cy.get('textarea[name="description"] + span').contains('Descrição é obrigatória');
  });

  it('Should create the event new in /lives', () => {
    const { titleShort, title, start, finish, goals, description } = randomLiveInfo();
    const fileName = 'marcos-castro.png';

    cy.get('input[name="titleShort"]').type(titleShort);
    cy.get('input[name="title"]').type(title);
    cy.fixture(fileName).then((fileContent) => {
      cy.get('input[name="photo"]').upload(
        { fileContent, fileName, mimeType: 'image/png' },
        { subjectType: 'input' }
      );
    });
    cy.get('input[name="startDate"]').type(start.date);
    cy.get('input[name="startTime"]').type(start.time);
    cy.get('input[name="finishDate"]').type(finish.date);
    cy.get('input[name="finishTime"]').type(finish.time);
    cy.get('textarea[name="goals"]').type(goals);
    cy.get('textarea[name="description"]').type(description);

    cy.get('button').click();

    cy.location('pathname').should('include', 'lives');
  });
});
