import { KendoTestPage } from './app.po';

describe('kendo-test App', () => {
  let page: KendoTestPage;

  beforeEach(() => {
    page = new KendoTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
