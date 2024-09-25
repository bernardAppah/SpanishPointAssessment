class HomePage {
    visit() {
        cy.visit('https://www.matchingengine.com/');
    }

    navigateToRepertoireManagementModule() {
        cy.get('#burger').click();
        cy.contains('Repertoire Management Module').click();
    }
}

export const homePage = new HomePage();