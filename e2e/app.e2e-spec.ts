import { BasicCardsPage } from './app.po';

describe('basic-cards App', function() {
  let page: BasicCardsPage;

  beforeEach(() => {
    page = new BasicCardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
