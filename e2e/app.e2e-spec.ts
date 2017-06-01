import { ECTaskPage } from './app.po';

describe('e-ctask App', () => {
  let page: ECTaskPage;

  beforeEach(() => {
    page = new ECTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
