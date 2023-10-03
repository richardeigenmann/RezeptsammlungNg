import { browser, by, element } from 'protractor';

export class REZEPTSAMMLUNGNGPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.className('nav-link')).getText();
  }
}
