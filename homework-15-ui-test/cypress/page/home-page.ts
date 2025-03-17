class HomePage {


    public getLogo(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('a.header__logo');
    }

    public getSearchInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input.search-form__input');
    }

    public getSearchButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[class*="search-form__submit"]');
    }

    public getSearchResults(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.goods-tile__title');
    }

    public getFirstProduct(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.goods-tile__title').first();
    }

    public getEnergyIndependenceProduct(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="fat_menu_category_link"]')
            .filter((index, element) => {
                return element.innerText.trim() === 'Енергонезалежність';
            })
            .first();
    }
}

export default HomePage;
