describe('service is available', () => {
  it('should be available on localhost:3000', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('constructor functionality', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should add bun', () => {
    cy.get('[class^=ingredient_item__]').first().as('firstBun');
    cy.get('[class^=ingredients-list_ingredientsWrapper]').first().as('constructor');

    cy.get('@firstBun').trigger('dragstart');
    cy.get('@constructor').trigger('drop');

    cy.get('@constructor').contains('Краторная');
  });

  it('should change bun', () => {
    cy.get('[class^=ingredient_item__]').first().as('firstBun');
    cy.get('[class^=ingredients-list_ingredientsWrapper]').first().as('constructor');

    cy.get('@firstBun').trigger('dragstart');
    cy.get('@constructor').trigger('drop');

    cy.get('@constructor').contains('Краторная');

    cy.get('#buns').find('[class^=ingredient_item__]').last().as('firstBun');
    cy.get('[class^=ingredients-list_ingredientsWrapper]').first().as('constructor');

    cy.get('@firstBun').trigger('dragstart');
    cy.get('@constructor').trigger('drop');

    cy.get('@constructor').contains('Флюоресцентная');
  });

  it('should add sauce', () => {
    cy.get('#sauces').find('[class^=ingredient_item__]').first().as('firstSauce');
    cy.get('[class^=ingredients-list_ingredientsWrapper]').first().as('constructor');

    cy.get('@firstSauce').trigger('dragstart');
    cy.get('@constructor').trigger('drop');

    cy.get('@constructor').contains('Соус');
  });

  it('should remove ingredient', () => {
    cy.get('#sauces').find('[class^=ingredient_item__]').first().as('firstSauce');
    cy.get('[class^=ingredients-list_ingredientsWrapper]').first().as('constructor');

    cy.get('@firstSauce').trigger('dragstart');
    cy.get('@constructor').trigger('drop');

    cy.get('[class^=burger-element_element__]').first().as('firstIngredient');
    cy.get('@firstIngredient').find('.constructor-element__action svg').click();
  });
});
