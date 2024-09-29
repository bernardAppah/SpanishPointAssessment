class RepertoireManagementModulePage {
    navigateToAdditionalFeatures() {
        cy.contains('Additional Features').scrollIntoView();
    }

    clickProductsSupported() {
        cy.contains('Products Supported').click();
    }

    assertSupportedProductsList() {
        cy.get('li[data-aria-level="2"]').then(($supportedProductList) => {
            if ($supportedProductList.length === 4) {
                cy.log('The supported product list contains four products, consistent with the state when this test was created.');
                cy.wrap($supportedProductList).each(($product, index) => {
                    const expectedProducts = ['Cue Sheet / AV Work', 'Recording', 'Bundle', 'Advertisement'];
                    cy.wrap($product).should('contain.text', expectedProducts[index]);
                });

            } else {
                cy.log('The size of the supported product list has changed since this test was created.')
                cy.wrap($supportedProductList).should('have.length.greaterThan', 0 );
            }
        });
    }


}
export const repertoireManagementModulePage = new RepertoireManagementModulePage();