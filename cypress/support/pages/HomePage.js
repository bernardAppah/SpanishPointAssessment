class HomePage {
    visit() {
        cy.visit('https://www.matchingengine.com/');
    }

    /**
     * Navigates to the repertoire management module.
     * @param useSmallScreenSize  - If true, sets the viewport to a small screen (e.g., iPad) and navigates using the burger menu.
     *                              If false, sets the viewport to a larger screen (e.g., MacBook) and uses the main navigation.
     */
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