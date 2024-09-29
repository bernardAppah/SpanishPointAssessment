import { homePage } from '../support/pages/HomePage';
import {repertoireManagementModulePage } from '../support/pages/RepertoireManagementModulePage'

describe('Repertoire Management Module Navigation and Product Support Verification', () => {
  beforeEach(() => {
    homePage.visit();
  });

  /**
   * Verifies that on the Repertoire Management Module page, the list of products are as expected.
   * @param useSmallScreenSize Indicates if to use a small screen size or not
   */
  function verifySupportedProducts(useSmallScreenSize) {
    homePage.navigateToRepertoireManagementModule(useSmallScreenSize);
    repertoireManagementModulePage.scrollToAdditionalFeatures();
    repertoireManagementModulePage.clickProductsSupported();
    repertoireManagementModulePage.assertSupportedProductsList();
  }

  it('should navigate to the repertoire management module and verify list of supported products on an ipad-2 (small screen)', () => {
    verifySupportedProducts(true);
  })

  it('should navigate to the repertoire management module and verify list of supported products on a macbook-15 (large screen)', () => {
    verifySupportedProducts(false);
  })
})