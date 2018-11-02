import { APMPage } from './app.po';

describe('apm App', () => {
  let page: APMPage;

  beforeEach(() => {
    page = new APMPage();
  });

  it('should display Richi\'s Rezeptsammlung', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Richi\'s Rezeptsammlung');
  });
});
