class IndependenceProduct {
    public waitForPageDisplayed(): void {
        cy.get('h1').should('be.visible');
        cy.get('h1').contains('Енергонезалежність');
    }


    public verifyTopWidgetsAreDisplayed(): void {
        const menuItems: string[] = [];
        cy.get('[class="top-widget__categories-list"] li').each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                menuItems.push(text.trim());
            });
        }).then(() => {
            expect(menuItems).to.include('Зарядні станції Ecoflow');
            expect(menuItems).to.include('Повербанки Xiaomi');
            expect(menuItems).to.include('Батарейки типу АА');
            expect(menuItems).to.include('Кабелі та адаптери');
            expect(menuItems).to.include('Портативні сонячні панелі');
            expect(menuItems).to.include('ДБЖ для роутерів');
            expect(menuItems).to.include('Генератори RZTK');
        });
    }
}

export default IndependenceProduct;
