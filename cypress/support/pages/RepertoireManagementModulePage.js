class RepertoireManagementModulePage {
    navigateToAdditionalFeatures() {
        cy.contains('Additional Features').scrollIntoView();
    }

    clickProductsSupported() {
        cy.contains('Products Supported').click();
    }

    assertSupportedProductsList() {
        cy.get('li[data-aria-level="2"]').should('have.length.greaterThan', 0 );
    }


}
export const repertoireManagementModulePage = new RepertoireManagementModulePage();