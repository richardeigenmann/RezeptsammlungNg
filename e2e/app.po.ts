import { browser, by, element } from 'protractor';

export class APMPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.className('nav-link')).getText();
  }
}
