class HomePage {
    visit() {
        cy.visit('https://www.matchingengine.com/');
    }
}

export const homePage = new HomePage();