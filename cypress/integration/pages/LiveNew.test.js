describe('Page LiveNew', () => {
  let $titleShort,
    $title,
    $photo,
    $startDate,
    $startTime,
    $finishDate,
    $finishTime,
    $goals,
    $description;

  before(() => {
    cy.visit('/lives/new');

    $titleShort = cy.get('input[name=titleShort]');
    $title = cy.get('input[name=title]');
    $photo = cy.get('input[name=photo]');
    $startDate = cy.get('input[name=startDate]');
    $startTime = cy.get('input[name=startTime]');
    $finishDate = cy.get('input[name=finishDate]');
    $finishTime = cy.get('input[name=finishTime]');
    $goals = cy.get('textare[name=goals]');
    $description = cy.get('textarea[name=description]');
  });
});
