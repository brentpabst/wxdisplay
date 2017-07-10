import { WxPage } from './app.po';

describe('wx App', () => {
  let page: WxPage;

  beforeEach(() => {
    page = new WxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
