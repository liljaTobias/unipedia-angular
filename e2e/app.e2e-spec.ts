import { UnipediaPage } from './app.po';

describe('unipedia App', () => {
  let page: UnipediaPage;

  beforeEach(() => {
    page = new UnipediaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
