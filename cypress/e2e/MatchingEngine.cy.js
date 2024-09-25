import { homePage } from '../support/pages/HomePage';
import {repertoireManagementModule } from '../support/pages/RepertoireManagementModule'
describe('Visit Website', () => {
  it('passes', () => {
    homePage.visit();
    homePage.navigateToRepertoireManagementModule();
  })
})