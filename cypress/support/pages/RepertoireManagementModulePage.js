class RepertoireManagementModulePage {
    scrollToAdditionalFeatures() {
        cy.contains('Additional Features').scrollIntoView();
    }

    clickProductsSupported() {
        cy.contains('Products Supported').click();
    }

    /**
     * Assert the list of supported products.
     */
    assertSupportedProductsList() {
        cy.get('li[data-aria-level="2"]').then(($supportedProductList) => {
            if ($supportedProductList.length === 4) {
                cy.log('The supported product list contains four products, consistent with the state when this test was created.');

                // Assert that the list contains the expected products.
                const expectedProducts = ['Cue Sheet / AV Work', 'Recording', 'Bundle', 'Advertisement'];
                expectedProducts.forEach((product) => {
                    cy.wrap($supportedProductList).should('contain.text', product);
                })

                // Assert that the list does not contain an 'unsupported product'
                cy.wrap($supportedProductList).should('not.contain', 'Not supported');
            } else {
                cy.log('The size of the supported product list has changed since this test was created.')
                cy.wrap($supportedProductList).should('have.length.greaterThan', 0 );
            }
        });
    }
}
export const repertoireManagementModulePage = new RepertoireManagementModulePage();