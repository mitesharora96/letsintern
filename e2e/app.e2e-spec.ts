import { LetsInternPage } from './app.po';

describe('lets-intern App', function() {
  let page: LetsInternPage;

  beforeEach(() => {
    page = new LetsInternPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
