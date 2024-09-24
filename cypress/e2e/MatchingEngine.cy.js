import { homePage } from '../support/pages/HomePage';

describe('Visit Website', () => {
  it('passes', () => {
    homePage.visit();
  })
})