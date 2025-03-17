import HomePage from '../../page/home-page.ts';
import IndependenceProduct from '../../page/independence-product';

describe('template spec', () => {
    beforeEach(() => {
        cy.visit('');
        cy.clearCookies();
        cy.clearLocalStorage();
    });
    const homePage = new HomePage();
    const independenceProduct = new IndependenceProduct();

    it('Verify find filter for Laptop ASUS', () => {
        homePage.getLogo().should('be.visible');
        homePage.getSearchInput().should('be.visible');
        homePage.getSearchInput().type('Ноутбук ASUS');
        homePage.getSearchButton().click();
        homePage.getSearchResults().should('have.length.greaterThan', 0);
        homePage.getFirstProduct().should('include.text', 'Ноутбук ASUS');
    });

    it('Verify Top Widget for Energy Independence Product', () => {
        homePage.getLogo().should('be.visible');
        homePage.getEnergyIndependenceProduct().click();
        independenceProduct.waitForPageDisplayed();
        independenceProduct.verifyTopWidgetsAreDisplayed();
    });
});
