import { ComboboxPage } from './app.po';

describe('combobox App', () => {
  let page: ComboboxPage;

  beforeEach(() => {
    page = new ComboboxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
