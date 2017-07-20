import { CostCalcPage } from './app.po';

describe('cost-calc App', () => {
  let page: CostCalcPage;

  beforeEach(() => {
    page = new CostCalcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
