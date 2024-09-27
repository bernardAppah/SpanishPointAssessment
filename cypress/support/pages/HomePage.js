class HomePage {
    visit() {
        cy.visit('https://www.matchingengine.com/');
    }

    navigateToRepertoireManagementModule(useSmallScreenSize) {
        if (useSmallScreenSize) {
            cy.viewport('ipad-2');
            cy.get('#burger').click();
        } else {
            cy.viewport('macbook-15')
            cy.contains('Modules').focus()
        }
        cy.contains('Repertoire Management Module').click();
    }
}

export const homePage = new HomePage();