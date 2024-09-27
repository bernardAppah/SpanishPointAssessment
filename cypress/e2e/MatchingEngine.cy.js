import { homePage } from '../support/pages/HomePage';
import {repertoireManagementModulePage } from '../support/pages/RepertoireManagementModulePage'

describe('Repertoire Management Module Navigation and Product Support Verification', () => {
  beforeEach(() => {
    homePage.visit();
  });

  // Helper function to handle different screen sizes based on the boolean flag
  function navigateAndTestRepertoireManagementModule(useSmallScreenSize) {
    homePage.navigateToRepertoireManagementModule(useSmallScreenSize);
    repertoireManagementModulePage.navigateToAdditionalFeatures();
    repertoireManagementModulePage.clickProductsSupported();
    repertoireManagementModulePage.assertSupportedProductsList();
  }

  it('should navigate to the repertoire management module and verify list of supported products on an ipad-2 ', () => {
    navigateAndTestRepertoireManagementModule(true);
  })

  it('should navigate to the repertoire management module and verify list of supported products on a macbook-15', () => {
    navigateAndTestRepertoireManagementModule(false);
  })
})