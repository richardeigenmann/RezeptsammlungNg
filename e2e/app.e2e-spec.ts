import { REZEPTSAMMLUNGNGPage } from './app.po';

describe('rezeptsammlungng App', () => {
  let page: REZEPTSAMMLUNGNGPage;

  beforeEach(() => {
    page = new REZEPTSAMMLUNGNGPage();
  });

  it('should display Richi\'s Rezeptsammlung', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Richi\'s Rezeptsammlung');
  });
});
