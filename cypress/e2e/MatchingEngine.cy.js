import { homePage } from '../support/pages/HomePage';
import {repertoireManagementModulePage } from '../support/pages/RepertoireManagementModulePage'
describe('Visit Website', () => {
  it('passes', () => {
    homePage.visit();
    homePage.navigateToRepertoireManagementModule();
    repertoireManagementModulePage.navigateToAdditionalFeatures();
    repertoireManagementModulePage.clickProductsSupported();
    repertoireManagementModulePage.assertSupportedProductsList();
  })
})